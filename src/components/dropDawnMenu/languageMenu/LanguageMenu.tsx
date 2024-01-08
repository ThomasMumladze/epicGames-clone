import "./style.scss";

import { Svg } from "../../../services/constants/Svg";
import { useState } from "react";

export const LanguageMenu = () => {
    const [area, setArea] = useState<boolean>(false);

    const languagesList = [
        { title: "english", icon: Svg.languages },
        { title: "العربية", icon: "" },
        { title: "deutsch", icon: "" },
        { title: "Español", icon: "" },
        { title: "Español (LA)", icon: "" },
        { title: "Français", icon: "" },
        { title: "italiano", icon: "" },
        { title: "日本語", icon: "" },
        { title: "한국어", icon: "" },
        { title: "polski", icon: "" },
        { title: "Português (Brasil)", icon: "" },
        { title: "Русский", icon: "" },
        { title: "ไทย", icon: "" },
        { title: "Türkçe", icon: "" },
        { title: "简体中文", icon: "" },
        { title: "繁體中文", icon: "" },
    ];

    return (
        <div
            className="langaugeDropDawnMenu"
            aria-expanded={area}
            onMouseEnter={() => setArea(true)}
            onMouseLeave={() => setArea(false)}
        >
            <div className="langauge-svg">{Svg.languages}</div>
            <div className="friendly-box friendly-box--top"></div>
            <div className="friendly-box friendly-box--wide-adjust"></div>
            <div className="dropDawnList ">
                {languagesList.map((lan, index) => (
                    <button key={index}>
                        <span className="capitalize">{lan.title} </span>
                        {lan.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};
