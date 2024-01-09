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
                        <Components.Card widthToDivision="3" />
                        <Components.Card widthToDivision="3" />
                        <Components.Card widthToDivision="3" />
                    </div>
                </div>
                {/* -------------------- END -------------------- */}
            </div>
        </React.Fragment>
    );
};
