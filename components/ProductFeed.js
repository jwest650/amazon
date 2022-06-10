import React from "react";
import Product from "./Product";

const ProductFeed = ({ product }) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-48 mx-auto">
            {product
                .slice(0, 4)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            rate={rating}
                        />
                    )
                )}
            <div className="md:col-span-full h-60">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_prime_day_2021_991-usen_placement203_1500x4501623702258600"
                    alt="sale"
                    className="w-full h-full object-fill"
                />
            </div>
            <div className="md:col-span-2">
                {product
                    .slice(4, 5)
                    .map(
                        ({
                            id,
                            title,
                            price,
                            description,
                            category,
                            image,
                            rating,
                        }) => (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={category}
                                image={image}
                                rate={rating}
                            />
                        )
                    )}
            </div>
            {product
                .slice(5)
                .map(
                    ({
                        id,
                        title,
                        price,
                        description,
                        category,
                        image,
                        rating,
                    }) => (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            rate={rating}
                        />
                    )
                )}
        </div>
    );
};

export default ProductFeed;
