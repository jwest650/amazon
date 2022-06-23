/* eslint-disable @next/next/no-typos */
import {
    getDoc,
    collection,
    query,
    where,
    doc,
    getDocs,
} from "firebase/firestore";
import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import db from "../firebase";

function Orders({ orders }) {
    const { data: session } = useSession();
    console.log(orders);

    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b border-yellow-400 pb-1 mb-2 capitalize">
                    your orders
                </h1>
                {session ? (
                    <h1>{orders.length} orders</h1>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(
                        ({
                            items,
                            id,
                            amountShipping,
                            amount,
                            timestamp,
                            images,
                        }) => (
                            <Order
                                key={id}
                                items={items}
                                id={id}
                                amountShipping={amountShipping}
                                amount={amount}
                                timestamp={timestamp}
                                images={images}
                            />
                        )
                    )}
                </div>
            </main>
        </div>
    );
}

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET);
    const session = await getSession(context);
    if (!session) return;
    const ref = collection(doc(db, "users", session.user.email), "order");

    const querySnapshot = await getDocs(ref);
    let orders = await Promise.all(
        querySnapshot.docs.map(async (doc) => ({
            id: doc.id,
            amount: doc.data().amount,
            amountShipping: doc.data().amount_shipping,
            images: doc.data().images,
            timestamp: moment(doc.data().timestamp.toDate()).unix(),
            items: await stripe.checkout.sessions.listLineItems(doc.id, {
                limit: 100,
            }),
        }))
    );
    return {
        props: {
            orders,
        },
    };
}
