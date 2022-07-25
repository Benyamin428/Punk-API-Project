import "./Card.scss";

const Card = ({image, name, tagline, abv, ph, ibu, first_brewed, description}) => {

    return (
        <div className="card">
            <div className="card__container">
                <img src={image} alt={name} className="card__image" />
                <div className="card__content">
                    <h2 className="card__title">{name} </h2>
                    <p className="card__text"><b>{tagline}</b> </p>
                    <p className="card__text"><b>ABV:</b> {abv} / <b>pH:</b> {ph} / <b>IBU:</b> {ibu}</p>
                    <p className="card__text">{`First Brewed: ${first_brewed}`}</p>
                    <p className="card__text">{description} </p>
                </div>
            </div>
        </div>
    );
}

export default Card;