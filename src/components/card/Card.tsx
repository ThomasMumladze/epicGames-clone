import "./style.scss";

interface Props {
    widthToDivision: string;
}
export const Card = (props: Props) => {
    return (
        <div className="wrapper" style={{ width: `calc(100% / ${props.widthToDivision} - 16px)` }}>
            <img src="https://cdn.wallpapersafari.com/67/82/U76fMj.jpg" alt="..." />
        </div>
    );
};
