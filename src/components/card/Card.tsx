import { Link } from "react-router-dom";
import "./style.scss";

interface Props {
    widthToDivision: string;
    imgSrc: string;
}
export const Card = (props: Props) => {
    return (
        <div className="wrapper" style={{ width: `calc(100% / ${props.widthToDivision} - 16px)` }}>
            <Link to={"/"} reloadDocument>
                <img src={props.imgSrc} alt="..." />
            </Link>
        </div>
    );
};
