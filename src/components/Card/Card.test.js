import { render, screen } from '@testing-library/react';
import Card from "./Card";
import beers from "../../data/beers";

const BuzzBeer = {
    image: beers[0].image_url,
    name: beers[0].name,
    tagline: beers[0].tagline, 
    abv: beers[0].abv,
    ph: beers[0].ph,
    ibu: beers[0].ibu,
    first_brewed: beers[0].first_brewed,
    description: beers[0].description
};

it("should have the correct name of the beer", () => {
    render(<Card 
        image={BuzzBeer.image} 
        name={BuzzBeer.name} 
        tagline={BuzzBeer.tagline} 
        abv={BuzzBeer.abv}
        ph={BuzzBeer.ph}
        ibu={BuzzBeer.ibu}
        first_brewed={BuzzBeer.first_brewed}
        description={BuzzBeer.description}
        />);

    const name = screen.getByRole("heading");
    
    expect(name).toHaveTextContent("Buzz");
})

it("should contain an image", () => {
    render(<Card 
        image={BuzzBeer.image} 
        name={BuzzBeer.name} 
        tagline={BuzzBeer.tagline} 
        abv={BuzzBeer.abv}
        ph={BuzzBeer.ph}
        ibu={BuzzBeer.ibu}
        first_brewed={BuzzBeer.first_brewed}
        description={BuzzBeer.description}
        />);

    const image = screen.getByRole("img");
    
    expect(image.src).toBe("https://images.punkapi.com/v2/keg.png");
})
