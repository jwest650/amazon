import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { Currency } from "react-tender";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectedItem, totalPrice } from "../slices/BasketReducer";
const Checkout = () => {
    const item = useSelector(selectedItem);
    const { data: session } = useSession();
    const total = useSelector(totalPrice);
    const createCheckout = () => {};
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Checkout ({item.length}) items</title>
            </Head>
            <Header />
            <main className="lg:flex max-w-screen-xl">
                {/* left */}
                <div className="grow m-5 shadow-sm">
                    <Image
                        src={
                            "https://img.freepik.com/free-vector/banner-black-friday-super-sale-realistic-3d-black-shopping-basket_548887-26.jpg?t=st=1654795675~exp=1654796275~hmac=8c540730a7409ad4a77ea2baffc877b23413f6d20bf2862ec91d0dfa5a338fd9&w=826"
                        }
                        alt=""
                        width={1090}
                        height={250}
                    />

                    <div className="flex flex-col space-y-10 p-5 bg-white">
                        <h2 className="text-3xl pb-4 border-b capitalize ">
                            {item.length == 0
                                ? "your amazon basket is empty"
                                : "your shopping basket"}
                        </h2>

                        {item.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rate={item.rate}
                            />
                        ))}
                    </div>
                </div>

                {/* right */}
                {item.length > 0 && (
                    <div className="flex flex-col bg-white p-10 shadow-md">
                        <h2 className="whitespace-nowrap capitalize ">
                            subtotal ({item.length} items){" "}
                            <span className="font-bold">
                                <Currency value={total} currency={"GHC"} />
                            </span>
                        </h2>
                        <button
                            onClick={createCheckout}
                            role={"link"}
                            disabled={!session}
                            className={`button mt-2  ${
                                !session &&
                                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 "
                            } `}
                        >
                            {!session
                                ? "Sign in to checkout"
                                : "Proceed to checkout"}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Checkout;
