import Card from "./../Card/Card";
import "./CardList.scss";

const CardList = ({beers}) => {

    const beerCards = beers.map(beer => {
        return <Card key={beer.id} 
        image={beer.image_url} 
        name={beer.name} 
        tagline={beer.tagline} 
        abv={beer.abv} 
        ph={beer.ph}
        ibu={beer.ibu}
        first_brewed={beer.first_brewed}
        description={beer.description} />
    })

    return (
        <div className="cardList">
            {beerCards}
        </div>
    );
}

export default CardList;