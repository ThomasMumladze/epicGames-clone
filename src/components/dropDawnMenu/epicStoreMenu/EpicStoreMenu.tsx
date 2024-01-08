import "./style.scss";

import { Constants } from "../../../services";

import { Link } from "react-router-dom";
import { useState } from "react";

interface constantNavType {
    title: string;
    content: { body: string; url: string }[];
}

export const EpicStoreMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean | null>(null);
    return (
        <div className="storeDropDawn">
            <div className="storeDropDawn-svg relative ">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center gap-[.5rem] w-[100%]"
                >
                    <div>{Constants.Svg.epicShield}</div>
                    <div className="arrowDawn">{Constants.Svg.arrowDawn}</div>
                </button>

                <div className="stick">{Constants.Svg.stick}</div>

                {menuOpen ? (
                    <div className="menu-lists absolute top-20">
                        <ul className="list-wrapper bg-[#202024]">
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
                ) : null}
            </div>
        </div>
    );
};
