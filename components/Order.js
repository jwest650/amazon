import moment from "moment";
import React from "react";
import { Currency } from "react-tender";
const Order = ({ items, id, amountShipping, amount, timestamp, images }) => {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center bg-gray-100 p-5 space-x-10 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs uppercase">order placed</p>
                    <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
                </div>
                <div>
                    <p className="font-bold uppercase text-sm">total</p>
                    <p>
                        <Currency value={amount} currency={"USD"} /> -Next Day
                        Delivery{" "}
                        <Currency value={amountShipping} currency={"USD"} />
                    </p>
                </div>
                <p className="text-sm sm:text-xl  whitespace-nowrap text-blue-500 text-right flex-1 pt-2">
                    {items.data.length} items
                </p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap ">
                    order # {id}
                </p>
            </div>
            <div className="p-5 sm:p-10">
                <div className=" flex space-x-6 overflow-x-auto">
                    {images.map((images, i) => (
                        <img
                            src={images}
                            alt=""
                            key={i}
                            className="h-20 object-contain sm:h-32"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Order;
