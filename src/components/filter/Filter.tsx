import "./style.scss";

import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

type Props = {
    location: any;
};

export const Filter = (props: Props) => {
    return (
        <div className="filters w-[100%] flex justify-center items-center sticky top-0 bg-[#121212] z-50">
            <div className="flex items-center w-[75%] h-[100px]">
                <div className="filter-search">
                    <div className="loop">
                        <Icon.Search />
                    </div>
                    <input type="text" placeholder="Search store" />
                    <div className="filtered-result"></div>
                </div>

                {location.pathname !== "/support" ? (
                    <div className="search-nav ml-[20px] ">
                        <ul>
                            <li
                                className={`${
                                    props.location.pathname == "/" ? "text-[#FFF]" : "text-[#9e9e9e]"
                                }`}
                            >
                                <Link to={"/"}>Discover</Link>
                            </li>
                            <li
                                className={`${
                                    props.location.pathname == "/browse" ? "text-[#FFF]" : "text-[#9e9e9e]"
                                }`}
                            >
                                <Link to={"/browse"}>browse</Link>
                            </li>
                            <li
                                className={`${
                                    props.location.pathname == "/news" ? "text-[#FFF]" : "text-[#9e9e9e]"
                                }`}
                            >
                                <Link to={"/news"}>news</Link>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
