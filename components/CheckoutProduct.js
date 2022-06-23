import BeautyStars from "beauty-stars";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { Currency } from "react-tender";
import { addToBasket, removeBasket } from "../slices/BasketReducer";

const CheckoutProduct = ({
    id,
    title,
    price,
    description,
    category,
    image,
    rate,
}) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        let product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rate,
        };
        dispatch(addToBasket(product));
    };
    const removeItemFromBasket = () => {
        dispatch(removeBasket({ id }));
    };
    return (
        <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} alt="" />
            {/* middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <BeautyStars
                    value={Math.floor(rate.rate)}
                    size={14}
                    activeColor={"yellow"}
                />
                <p className="mt-2 my-2 line-clamp-3 text-sm">{description}</p>
                <Currency value={price} currency={"USD"} />
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button " onClick={addItemToBasket}>
                    add to basket
                </button>
                <button className="button " onClick={removeItemFromBasket}>
                    remove from basket
                </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
