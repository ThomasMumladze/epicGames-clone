import "./style.scss";

import store_img from "../../assets/store.svg";

import { Components, DropDawnMenu } from "../../components";

import { Svg } from "../../services/constants/Svg";

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="w-[100%] bg-[#18181c] h-[4.5rem]">
            <div className="epic-shield mr-3">
                <DropDawnMenu.EpicStoreMenu />
            </div>

            <div className="header_body">
                <div className="store">
                    <Link to={"/"}>
                        <img src={store_img} alt="" />
                    </Link>
                </div>

                <div className="w-[100%] flex items-center justify-between">
                    <Components.Navigation />

                    <div className="dropDawn-tools">
                        <DropDawnMenu.LanguageMenu />

                        <div className="authorize">
                            <div className="authorize-svg">{Svg.userIcon}</div>
                        </div>

                        <Components.DownloadButton />
                    </div>
                </div>
            </div>
        </header>
    );
};
