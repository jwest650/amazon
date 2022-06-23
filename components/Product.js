import BeautyStars from "beauty-stars";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { Currency } from "react-tender";
import { addToBasket } from "../slices/BasketReducer";

function Product({ id, title, price, description, category, image, rate }) {
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
    return (
        <div className="flex  flex-col m-5 bg-white p-10 relative z-40">
            <p className="absolute right-2  top-2 text-xs italic text-gray-400">
                {category}
            </p>
            <Image
                src={image}
                alt=""
                width={"200"}
                height={"200"}
                objectFit="contain"
            />
            <h4 className="my-3">{title}</h4>
            <div className="mb-5">
                <BeautyStars
                    value={Math.floor(rate.rate)}
                    size={14}
                    activeColor={"yellow"}
                />
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div>
                <Currency value={price} currency={"USD"} />
            </div>
            <button className="button" onClick={addItemToBasket}>
                add to basket
            </button>
        </div>
    );
}

export default Product;
