import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 w-full h-32 z-10" />
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                interval={5000}
            >
                <div className="">
                    <img
                        src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                </div>
                <div className="">
                    <img
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                </div>
                <div className="">
                    <img
                        src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                        alt=""
                        className="h-full w-full"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
