import "./style.scss";
import { Svg } from "../../../services/constants/Svg";

export const LanguageMenu = () => {
    console.log();

    return (
        <div className="langaugeDropDawnMenu">
            <div className="langauge-svg">{Svg.languages}</div>
        </div>
    );
};
