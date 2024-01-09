import "./style.scss";

import React from "react";

import { Components } from "../../components";

export const Discover = () => {
    return (
        <React.Fragment>
            <div className="w-[75%] max-w-[1600px] ml-auto mr-auto">
                {/* sales  epic coupon && featured giveaways*/}
                <div className="sale-coupon-giveaways">
                    <div className="flex items-start justify-evenly w-[100%]">
                        <Components.Card
                            widthToDivision="3"
                            imgSrc="https://cdn2.unrealengine.com/en-holiday-sale-3-up-breaker-1920x1080-e66be3535c99.jpg?h=480&quality=medium&resize=1&w=854"
                        />
                        <Components.Card
                            widthToDivision="3"
                            imgSrc="https://cdn2.unrealengine.com/en-coupon-3-up-asset-1920x1080-12f8c35fe87a.jpg?h=480&quality=medium&resize=1&w=854"
                        />
                        <Components.Card
                            widthToDivision="3"
                            imgSrc="https://cdn2.unrealengine.com/en-featured-giveaways-04-1920x1080-047f34358794.jpg?h=480&quality=medium&resize=1&w=854"
                        />
                    </div>
                </div>
                {/* -------------------- END -------------------- */}
            </div>
        </React.Fragment>
    );
};
