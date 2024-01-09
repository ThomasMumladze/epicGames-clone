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
    return <div className="storeDropDawn"></div>;
};
