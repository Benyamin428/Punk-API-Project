const Card = ({image, name, description}) => {

    return (
        <div className="card">
            <img src={image} alt={name} className="card__image" />
            <h2 className="card__title">{name}</h2>
            <p className="card__text">{description}</p>
        </div>
    );
}

export default Card;