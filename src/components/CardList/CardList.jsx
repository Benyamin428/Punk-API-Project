import Card from "./../Card/Card";
import "./CardList.scss";

const CardList = () => {
    return (
        <div className="cardList">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;