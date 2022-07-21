import Card from "./../Card/Card";
import "./CardList.scss";

const CardList = ({beers}) => {

    const beerCards = beers.map(beer => {
        return <Card key={beer.id} image={beer.image_url} name={beer.name} description={beer.description} />
    })

    return (
        <div className="cardList">
            {beerCards}
        </div>
    );
}

export default CardList;