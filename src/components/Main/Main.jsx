import CardList from "./../CardList/CardList";

const Main = ({beers}) => {
    return (
        <div className="main">
            <CardList beers={beers}/>
        </div>
    );
}

export default Main;