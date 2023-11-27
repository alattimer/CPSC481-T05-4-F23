//TODO: Come in here an add a "Favovite" trigger for favoriting system.
//TODO: come in here and split description into two different strings, shortDesc and longDesc, to seperate descriptions for front page and the housing page.
const listings = [
    { image: "House Images/DefaultHouse.jpg", price: 1000000, description: "Step into the past while enjoying contemporary comforts in this stately 6-bedroom, 4.5-bathroom historic home. Meticulously restored, this property boasts original period details, including exquisite woodwork and stained glass windows, combined with a state-of-the-art kitchen and updated bathrooms. The expansive grounds include a charming carriage house, a beautifully landscaped garden, and a serene courtyard. Immerse yourself in timeless elegance within walking distance of the city's cultural amenities.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 1, noBathrooms: 2, noBedrooms: 3, floors: "Three Floors, All Laminated", basement: "Yes"},
    { image: "House Images/listing2.jpg", price: 500000, description: "Experience the pinnacle of coastal living in this magnificent 5-bedroom, 5.5-bathroom waterfront estate. Nestled along a pristine shoreline, this home offers over 6,000 square feet of luxurious living space, with custom-built details and breathtaking ocean views from every room. The gourmet kitchen is a chef's dream, while the outdoor terrace, infinity pool, and private beach access create an unparalleled oasis of relaxation and entertainment. This is an extraordinary opportunity to own a coastal masterpiece.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 2, noBathrooms: 5, noBedrooms: 5, floors: "Two Floors, All Wood", basement: "No" },
    { image: "House Images/listing3.jpg", price: 325000, description: "Spread out and savor the tranquility on this 100-acre ranch with a 4-bedroom, 3-bathroom home. Ideal for equestrian enthusiasts or nature lovers, this property features rolling pastures, a stocked pond, a barn, and a custom-built residence. The home's open layout and large windows capture stunning panoramic views, while the spacious deck is perfect for taking in sunsets over the meadows. Experience the serene beauty of rural living with all the modern conveniences.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 3, noBathrooms: 1, noBedrooms: 2, floors: "Three Floors, All Tile", basement: "Yes" },
    { image: "House Images/listing4.jpg", price: 5000000, description: "Be inspired by the architectural brilliance of this 7-bedroom, 6.5-bathroom masterpiece set high in the hills. The design seamlessly blends indoor and outdoor living, with floor-to-ceiling windows, multiple terraces, and a lush garden courtyard. Each room is a work of art, featuring custom fixtures and materials. Panoramic city and mountain views provide an enchanting backdrop, and the infinity pool and spa offer a retreat unlike any other.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 4, noBathrooms: 4, noBedrooms: 5, floors: "Four Floors, All Carpet", basement: "Yes"  },
    { image: "House Images/listing5.jpg", price: 175000, description: "This 5-bedroom, 5-bathroom lakefront estate redefines luxury with its unparalleled quality and finishes. Every detail, from the marble floors to the hand-carved woodwork, exudes opulence. The chef's kitchen, private library, home theater, and wine cellar are only a few of the lavish amenities. The outdoor space features a covered boathouse, infinity pool, and manicured gardens, all while overlooking the sparkling lake. Experience the epitome of elegance in this prestigious lakefront home.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 5, noBathrooms: 1, noBedrooms: 4, floors: "Two Floors, All Laminated", basement: "Yes"  },
    { image: "House Images/listing6.png", price: 895000, description: "Live the mountain dream in this 4-bedroom, 4.5-bathroom ski-in, ski-out lodge nestled in the heart of a premier ski resort. This stunning chalet offers top-tier craftsmanship with rustic yet refined finishes. The open floor plan includes a stone fireplace, gourmet kitchen, and a wall of windows showcasing breathtaking alpine views. After a day on the slopes, unwind in the hot tub or enjoy a cozy night by the fire. This property is your gateway to year-round mountain adventures.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 7, noBathrooms: 2, noBedrooms: 3, floors: "Three Floors, All Laminated", basement: "Yes"  },
    { image: "House Images/listing7.jpg", price: 2500000, description: "Discover the equestrian lifestyle on this 20-acre estate with a 5-bedroom, 4-bathroom home. Equipped with a full equestrian facility, including a barn, riding arena, and multiple paddocks, it's the ideal haven for horse enthusiasts. The home boasts a spacious floor plan, chef's kitchen, and a master suite with a private balcony. The expansive outdoor space includes a pool, spa, and barbecue area, making it perfect for entertaining and enjoying the picturesque countryside.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 8, noBathrooms: 2, noBedrooms: 3, floors: "Two Floors, All Wood", basement: "Yes"  },
    { image: "House Images/listing8.jpg", price: 450000, description: "Escape to your private island paradise with this 4-bedroom, 3-bathroom beachfront villa. Surrounded by crystal-clear waters and white sandy beaches, this retreat offers the ultimate in seclusion and luxury. The home's contemporary design features an open-concept living area, a fully equipped kitchen, and stunning ocean views from every room. Enjoy water sports, sunsets, and the serenity of island living in this exclusive escape.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 1, noBathrooms: 2, noBedrooms: 3, floors: "Three Floors, All Laminated", basement: "Yes"  },
    { image: "House Images/listing9.jpg", price: 670000, description: "Embrace the charm of this historic vineyard estate, boasting a 6-bedroom, 6-bathroom home and 40 acres of vineyards. The property has been meticulously preserved and updated, offering a wine cellar, tasting room, and an outdoor entertainment area with vineyard views. The elegant home features original hardwood floors, grand fireplaces, and a spacious veranda. Live the vintner's dream while creating your own legacy on this captivating estate.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 9, noBathrooms: 2, noBedrooms: 3, floors: "Two Floors, All Wood", basement: "Yes"  },
    { image: "House Images/listing10.jpg", price: 5, description: "Elevate your city living experience in this luxurious 3-bedroom, 3.5-bathroom penthouse with 360-degree city views. This high-rise gem features a private elevator, an open-concept design, and a gourmet kitchen with top-of-the-line appliances. The expansive rooftop terrace offers a spa, outdoor kitchen, and fire pit, making it the ultimate space for entertaining or unwinding while gazing at the dazzling cityscape.", location: "Location: 1942 Cape Cod, Carthage Missouri, USA", isListed: false, listingID: 10, noBathrooms: 2, noBedrooms: 3, floors: "Three Floors, All Laminated", basement: "Yes"  }];

function getRandomListing(ran) {
    return listings[ran];
}

function setListed(ran) {
    listings[ran].isListed = true;
}

function getListingsSize() {
    return listings.length;
}

function getUnlistedListing() {
    for (let index = 0; index < listings.length; index++) {
        if(listings[index].isListed == false){
            listings[index].isListed = true;
            return listings[index];
        }
    }
}

function getListingByID(id) {
    var list = listings.find((l) => l.listingID === parseInt(id));
    return list;
}

// Pseudo search value, could be changed to be more complexed
const criteria = {
    price: { min: 700000, max: 900000 },
    homeType: 'Single Family',
    noBedrooms: { min: 3 },
    noBathrooms: { min: 2 },
    noGarage: { min: 1 },
    houseSize: { min: 1500, max: 2500 }
};


// Initialize search function to be called from index.html
// I planned filterListings to be price filter, I am trying to add more features filter
function filterListings(listings, criteria) { 
    var filteredListings = [];
    for (var i = 0; i < listings.length; i++) {
        var isMatch = true;
        for (var key in criteria) {
            if (criteria.hasOwnProperty(key)) {
                if (typeof criteria[key] === 'object' && criteria[key] !== null && 'min' in criteria[key] && 'max' in criteria[key]) {
                    if (listings[i][key] < criteria[key].min || listings[i][key] > criteria[key].max) {
                        isMatch = false;
                        break;
                    }
                } else if (listings[i][key] !== criteria[key]) {
                    isMatch = false;
                    break;
                }
            }
        }
        if (isMatch) {
            filteredListings.push(listings[i]);
        }
    }
    return filteredListings;
}

const filteredListings = filterListings(listings, criteria);