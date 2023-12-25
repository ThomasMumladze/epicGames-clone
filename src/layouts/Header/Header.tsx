import "./style.scss";

import store_img from "../../assets/store.svg";

import { Components } from "../../components";

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="w-[100%] bg-[#18181c] h-[4.5rem]">
            <div className="epic-shield"></div>

            <div className="header_body">
                <div className="store">
                    <Link to={"/"}>
                        <img src={store_img} alt="" />
                    </Link>
                </div>

                <Components.Navigation />
            </div>
        </header>
    );
};
