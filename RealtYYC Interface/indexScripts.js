//TODO: Come in here an add a "Favovite" trigger for favoriting system.
//TODO: come in here and split description into two different strings, shortDesc and longDesc, to seperate descriptions for front page and the housing page.
const listings = [
    {
        image: "House Images/DefaultHouse.jpg",
        price: 620000,
        shortDesc: "Modern 3-bed, 2.5-bath house with city views.",
        longDesc: "This contemporary two-story house offers panoramic city views, an open-concept living space, and a master suite with a private balcony. Perfect for those who appreciate modern design.",
        location: "234 Oak Ridge Drive, Calgary",
        isListed: false,
        listingID: 1,
        noBathrooms: 2.5,
        noBedrooms: 3,
        floors: 2,
        hasBasement: "No",
        type: "House",
        isFavorited: false
    },
    {
        image: "House Images/listing2.jpg",
        price: 580000,
        shortDesc: "Charming 4-bed, 3-bath bungalow with a finished basement.",
        longDesc: "Step into this well-maintained bungalow featuring a finished basement with a recreation room. The backyard oasis includes a patio and a garden. Ideal for families or those who love single-level living.",
        location: "345 Cedar Lane, Calgary",
        isListed: false,
        listingID: 2,
        noBathrooms: 3,
        noBedrooms: 4,
        floors: 1,
        hasBasement: "No",
        type: "Bungalow",
        isFavorited: false
    },
    {
        image: "House Images/listing3.jpg",
        price: 700000,
        shortDesc: "Spacious 5-bed, 4-bath duplex with mountain views.",
        longDesc: "This elegant duplex offers spacious living areas, a gourmet kitchen, and a fenced backyard with stunning mountain views. The master suite includes a walk-in closet and a luxurious bathroom.",
        location: "456 Pinecrest Avenue, Calgary",
        isListed: false,
        listingID: 3,
        noBathrooms: 1,
        noBedrooms: 2,
        floors: 3,
        hasBasement: "No",
        type: "Duplex",
        isFavorited: false
    },
    {
        image: "House Images/listing4.jpg",
        price: 650000,
        shortDesc: "Luxurious 4-bed, 3.5-bath condominium in a prime location.",
        longDesc: "Enjoy maintenance-free living in this upscale condominium with high-end finishes, a private balcony, and access to amenities. The master suite boasts a spa-like bathroom and walk-in closet.",
        location: "567 Maple Grove Court, Calgary",
        isListed: false,
        listingID: 4,
        noBathrooms: 3.5,
        noBedrooms: 4,
        floors: 2,
        hasBasement: "Yes",
        type: "Condominium",
        isFavorited: false
    },
    {
        image: "House Images/listing5.jpg",
        price: 750000,
        shortDesc: "Modern 3-bed, 2.5-bath bi-level home with a fireplace.",
        longDesc: "This contemporary bi-level home features an open floor plan, a gourmet kitchen, and a living room with a fireplace. The master bedroom is a retreat with a private balcony.",
        location: "678 Birch Ridge Road, Calgary",
        isListed: false,
        listingID: 5,
        noBathrooms: 2.5,
        noBedrooms: 3,
        floors: 2,
        hasBasement: "Yes",
        type: "Home",
        hasFireplace: "Yes",
        isFavorited: false
    },
    {
        image: "House Images/listing6.png",
        price: 590000,
        shortDesc: "Cozy 2-bed, 1-bath bungalow with a detached garage.",
        longDesc: "This charming bungalow offers a comfortable living space, a detached garage, and a quaint backyard. Perfect for those seeking a cozy, low-maintenance home.",
        location: "789 Aspen Lane, Calgary",
        isListed: false,
        listingID: 7,
        noBathrooms: 1,
        noBedrooms: 2,
        floors: 1,
        hasBasement: "No",
        type: "Bungalow",
        hasFireplace: "No",
        isFavorited: false
    },
    {
        image: "House Images/listing7.jpg",
        price: 680000,
        shortDesc: "4-bed, 3-bath house with a hot tub and attached garage.",
        longDesc: "Indulge in this well-appointed house featuring a hot tub in the backyard, a spacious living area, and an attached garage. The master suite includes a private bathroom and walk-in closet.",
        location: "890 Elmwood Drive, Calgary",
        isListed: false,
        listingID: 8,
        noBathrooms: 3,
        noBedrooms: 4,
        floors: "Two Floors, All Wood",
        basement: "Yes",
        type: "House",
        isFavorited: false
    },
    {
        image: "House Images/listing8.jpg",
        price: 720000,
        shortDesc: "Stylish 3-bed, 2.5-bath duplex with AC and a pool.",
        longDesc: "Live in luxury with this duplex offering air conditioning, a private pool, and high-end finishes throughout. The master bedroom includes a walk-in closet and an ensuite bathroom.",
        location: "901 Spruce Grove Avenue, Calgary",
        isListed: false,
        listingID: 1,
        noBathrooms: 2,
        noBedrooms: 3,
        floors: "Three Floors, All Laminated",
        basement: "Yes",
        type: "Duplex",
        isFavorited: false
    },
    {
        image: "House Images/listing9.jpg",
        price: 630000,
        shortDesc: "3-bed, 2-bath house with a finished basement and backyard.",
        longDesc: "This family-friendly house features a finished basement with a playroom, a spacious backyard, and a functional kitchen. Perfect for entertaining and family gatherings.",
        location: "102 Cedarwood Court, Calgary",
        isListed: false,
        listingID: 9,
        noBathrooms: 2,
        noBedrooms: 3,
        floors: "Two Floors, All Wood",
        basement: "Yes",
        type: "House",
        isFavorited: false
    },
    {
        image: "House Images/listing10.jpg",
        price: 740000,
        shortDesc: "Quaint 2-bed, 1-bath cottage-style home with a driveway.",
        longDesc: "Step into this charming single-story cottage with a private driveway, a sunlit living area, and a cozy backyard. Perfect for those seeking a simple, picturesque lifestyle.",
        location: "304 Oak Avenue, Calgary",
        isListed: false,
        listingID: 10,
        noBathrooms: 2,
        noBedrooms: 3,
        floors: "Three Floors, All Laminated",
        basement: "Yes",
        isFavorited: false
    }];

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
        if (listings[index].isListed == false) {
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