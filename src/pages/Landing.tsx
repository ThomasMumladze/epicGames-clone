import "./style.scss";

import React, { useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

import { Layouts } from "../layouts";

export const Landing = () => {
    const location = useLocation();
    const [] = useState();
    return (
        <React.Fragment>
            <Layouts.Header />

            <main>
                {location.pathname !== "/support" ? (
                    <div className="search-nav">
                        <ul>
                            <li className={`${location.pathname == "/" ? "text-[#FFF]" : "text-[#9e9e9e]"}`}>
                                <Link to={"/"}>Discover</Link>
                            </li>
                            <li
                                className={`${
                                    location.pathname == "/browse" ? "text-[#FFF]" : "text-[#9e9e9e]"
                                }`}
                            >
                                <Link to={"/browse"}>browse</Link>
                            </li>
                            <li
                                className={`${location.pathname == "/news" ? "text-[#FFF]" : "text-[#9e9e9e]"}`}
                            >
                                <Link to={"/news"}>news</Link>
                            </li>
                        </ul>
                    </div>
                ) : null}

                <Outlet />
                <div className="h-[2500px]"></div>
            </main>

            <Layouts.Footer />
        </React.Fragment>
    );
};
