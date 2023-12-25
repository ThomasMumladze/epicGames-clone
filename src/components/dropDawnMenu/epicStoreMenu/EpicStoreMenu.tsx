import "./style.scss";

import { Svg } from "../../../services/constants/Svg";

export const EpicStoreMenu = () => {
    return (
        <div className="storeDropDawn">
            <div className="storeDropDawn-svg ">
                <button className="flex items-center gap-[.5rem] w-[100%]">
                    <div>{Svg.epicShield}</div>
                    <div className="arrowDawn">{Svg.arrowDawn}</div>
                </button>

                <div className="stick">{Svg.stick}</div>
            </div>
        </div>
    );
};
