import "./style.scss";

import { Constants } from "../../../services";

import { Link } from "react-router-dom";

interface constantNavType {
    title: string;
    content: { body: string; url: string }[];
}

export const EpicStoreMenu = () => {
    return (
        <div className="storeDropDawn">
            <div className="storeDropDawn-svg relative ">
                <button className="flex items-center gap-[.5rem] w-[100%]">
                    <div>{Constants.Svg.epicShield}</div>
                    <div className="arrowDawn">{Constants.Svg.arrowDawn}</div>
                </button>

                <div className="stick">{Constants.Svg.stick}</div>

                <div className="menu-lists absolute top-20">
                    <ul className="subMenu bg-[#202024]">
                        {Constants.NavFlyoutStore.map((item: constantNavType, i) => (
                            <li key={i}>
                                <span className="text-[#FFF] capitalize">{item.title}</span>
                                <ul>
                                    {item.content.map((body, index) => (
                                        <li key={index}>
                                            <Link
                                                className="capitalize"
                                                to={body.url}
                                                target={body.url == "/" ? "_self" : "_blank"}
                                            >
                                                {body.body}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
