import "./style.scss";

import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/distribution"}>distribution</Link>
                </li>
                <li>
                    <Link to={"/support"}>support</Link>
                </li>
                <li>
                    <a href="https://www.unrealengine.com/en-US/">unreal engine</a>
                </li>
            </ul>
        </nav>
    );
};
