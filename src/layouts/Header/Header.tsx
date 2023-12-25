import "./style.scss";

import store_img from "../../assets/store.svg";

import { Components } from "../../components";

import { Constants } from "../../services";

export const Header = () => {
    return (
        <header className="w-[100%] bg-[#18181c] h-[4.5rem]">
            <div className="epic-shield"></div>
            <div className="header_body">
                <div className="store">
                    <img src={store_img} alt="" />
                </div>
                <Components.Navigation />
            </div>
        </header>
    );
};
