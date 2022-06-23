import React from "react";
import Header from "../components/Header";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";

const Success = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center space-x-2 mb-5">
                        <AiFillCheckCircle className="text-green-500 text-3xl" />
                        <h1 className="text-3xl capitalize">
                            thank you your order has been confirmed!
                        </h1>
                    </div>
                    <p className="capitalize">
                        thank you for shopping with us . We&apos;ll send you a
                        confirmation code that you item has been shipped.if you
                        would like to check the status of order(s) please press
                        the link below.
                    </p>
                    <button
                        className="capitlalize button mt-8"
                        onClick={() => router.push("/orders")}
                    >
                        go to my orders
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Success;
