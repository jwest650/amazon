import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectedItem } from "../slices/BasketReducer";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const item = useSelector(selectedItem);

    return (
        <header className="">
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue  h-20 ">
                <div
                    className="flex items-center grow sm:grow-0"
                    onClick={() => router.push("/")}
                >
                    <Image
                        alt=""
                        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                        width={"120"}
                        height={"40"}
                        objectFit={"contain"}
                        className="cursor-pointer"
                    />
                </div>
                {/* search */}
                <div className="hidden sm:flex items-center  bg-yellow-300 grow cursor-pointer hover:bg-yellow-400 h-10 rounded ">
                    <input className="h-full rounded-l-md grow shrink-1 w-6 p-2 outline-none" />
                    <FiSearch className="h-12 m-4 " />
                </div>

                {/* right */}
                <div className="flex text-white items-center text-sm space-x-6 capitalize mx-6 ">
                    <div
                        className="cursor-pointer hover:border p-2 rounded"
                        onClick={() => (session ? signOut() : signIn())}
                    >
                        <p>
                            {session
                                ? `Hello, ${session.user.name}`
                                : "Hello, Sign in"}
                        </p>
                        <p className="font-bold">Accounts & List</p>
                    </div>
                    <div
                        onClick={() => router.push("/orders")}
                        className="cursor-pointer hover:border p-2 rounded "
                    >
                        <p>return </p>
                        <p className="font-bold">& orders</p>
                    </div>
                    <div
                        className=" items-center font-bold   flex relative cursor-pointer hover:border p-2  rounded"
                        onClick={() => router.push("/checkout")}
                    >
                        <span className="absolute right-5 top-0 text-orange-600 text-lg">
                            {item.length}
                        </span>
                        <BsCart4 className="text-4xl" />
                        <p className="mt-3">cart</p>
                    </div>
                </div>
            </div>

            {/* bottom Nav */}
            <div className="bg-amazon_blue-light text-white text-xs  md:text-sm  flex items-center space-x-3 p-2 pl-6 capitalize">
                <p className="flex items-center p-2 hover:border border-white">
                    <AiOutlineMenu className="h-6 mr-1" />
                    All
                </p>
                <p className=" p-2 hover:border border-white">todays deal</p>
                <p className=" p-2 hover:border border-white">
                    customer service
                </p>
                <p className=" p-2 hover:border border-white">registry</p>
                <p className=" p-2 hover:border border-white">gift card</p>
                <p className=" p-2 hover:border border-white">sell</p>
            </div>
        </header>
    );
};

export default Header;
