//TODO: Come in here an add a "Favovite" trigger for favoriting system.
//TODO: come in here and split description into two different strings, shortDesc and longDesc, to seperate descriptions for front page and the housing page.
var listings = [
    {
        image: "House Images/DefaultHouse.jpg",
        price: 620000,
        size: 2400,
        shortDesc: "Modern 3-bed, 2.5-bath house with city views.",
        longDesc: "This contemporary two-story house offers panoramic city views, an open-concept living space, and a master suite with a private balcony. Perfect for those who appreciate modern design.",
        location: "234 Oak Ridge Drive, Calgary",
        isListed: false,
        listingID: 1,
        noBathrooms: 2.5,
        noBedrooms: 3,
        noGarages: 1,
        floors: 2,
        hasBasement: true,
        type: "House",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: false,
        pool: false,
        backyard: false,
        interiorImages: ["House Images/InteriorPictures/defaultHome/office.png", "House Images/InteriorPictures/defaultHome/livingRoom.png", "House Images/InteriorPictures/defaultHome/kitchen.png", "House Images/InteriorPictures/defaultHome/diningRoom.png", "House Images/InteriorPictures/defaultHome/bathroom.png"]
    },
    {
        image: "House Images/listing2.jpg",
        price: 580000,
        size: 2600,
        shortDesc: "Charming 4-bed, 3-bath bungalow with a finished basement.",
        longDesc: "Step into this well-maintained bungalow featuring a finished basement with a recreation room. The backyard oasis includes a patio and a garden. Ideal for families or those who love single-level living.",
        location: "345 Cedar Lane, Calgary",
        isListed: false,
        listingID: 2,
        noBathrooms: 3,
        noBedrooms: 4,
        noGarages: 1,
        floors: 1,
        hasBasement: true,
        type: "Bungalow",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: true,
        pool: false,
        backyard: true,
        interiorImages: ["House Images/InteriorPictures/listing2/office2.png", "House Images/InteriorPictures/listing2/livingRoom2.png", "House Images/InteriorPictures/listing2/kitchen2.png", "House Images/InteriorPictures/listing2/diningRoom2.png", "House Images/InteriorPictures/listing2/bathroom2.png"]
    },
    {
        image: "House Images/listing3.jpg",
        price: 700000,
        size: 4100,
        shortDesc: "Spacious 5-bed, 4-bath duplex with mountain views.",
        longDesc: "This elegant duplex offers spacious living areas, a gourmet kitchen, and a fenced backyard with stunning mountain views. The master suite includes a walk-in closet and a luxurious bathroom.",
        location: "456 Pinecrest Avenue, Calgary",
        isListed: false,
        listingID: 3,
        noBathrooms: 1,
        noBedrooms: 2,
        noGarages: 2,
        floors: 3,
        hasBasement: false,
        type: "Duplex",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: true,
        pool: false,
        backyard: true,
        interiorImages: ["House Images/InteriorPictures/listing3/office3.png", "House Images/InteriorPictures/listing3/livingRoom3.png", "House Images/InteriorPictures/listing2/kitchen3.png", "House Images/InteriorPictures/listing2/diningRoom3.png", "House Images/InteriorPictures/listing2/bathroom3.png"]
    },
    {
        image: "House Images/listing4.jpg",
        price: 650000,
        size: 1600,
        shortDesc: "Luxurious 4-bed, 3.5-bath condominium in a prime location.",
        longDesc: "Enjoy maintenance-free living in this upscale condominium with high-end finishes, a private balcony, and access to amenities. The master suite boasts a spa-like bathroom and walk-in closet.",
        location: "567 Maple Grove Court, Calgary",
        isListed: false,
        listingID: 4,
        noBathrooms: 3.5,
        noBedrooms: 4,
        noGarages: 0,
        floors: 2,
        hasBasement: false,
        type: "Condominium",
        isFavorited: false,
        airCond: true,
        fireplace: false,
        driveway: false,
        pool: false,
        backyard: false,
        interiorImages: ["House Images/InteriorPictures/listing4/office4.png", "House Images/InteriorPictures/listing4/livingRoom4.png", "House Images/InteriorPictures/listing4/kitchen4.png", "House Images/InteriorPictures/listing4/diningRoom4.png", "House Images/InteriorPictures/listing4/bathroom4.png"]
    },
    {
        image: "House Images/listing5.jpg",
        price: 750000,
        size: 2700,
        shortDesc: "Modern 3-bed, 2.5-bath bi-level home with a fireplace.",
        longDesc: "This contemporary bi-level home features an open floor plan, a gourmet kitchen, and a living room with a fireplace. The master bedroom is a retreat with a private balcony.",
        location: "678 Birch Ridge Road, Calgary",
        isListed: false,
        listingID: 5,
        noBathrooms: 2.5,
        noBedrooms: 3,
        noGarages: 1,
        floors: 2,
        hasBasement: false,
        type: "House",
        hasFireplace: "Yes",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: false,
        pool: false,
        backyard: false,
        interiorImages: ["House Images/InteriorPictures/listing5/office5.png", "House Images/InteriorPictures/listing5/livingRoom5.png", "House Images/InteriorPictures/listing5/kitchen5.png", "House Images/InteriorPictures/listing5/diningRoom5.png", "House Images/InteriorPictures/listing5/bathroom5.png"]
    },
    {
        image: "House Images/listing6.png",
        price: 590000,
        size: 1900,
        shortDesc: "Cozy 2-bed, 1-bath bungalow with a detached garage.",
        longDesc: "This charming bungalow offers a comfortable living space, a detached garage, and a quaint backyard. Perfect for those seeking a cozy, low-maintenance home.",
        location: "789 Aspen Lane, Calgary",
        isListed: false,
        listingID: 6,
        noBathrooms: 1,
        noBedrooms: 2,
        noGarages: 1,
        floors: 1,
        hasBasement: false,
        type: "Bungalow",
        hasFireplace: "No",
        isFavorited: false,
        airCond: false,
        fireplace: true,
        driveway: false,
        pool: false,
        backyard: false,
        interiorImages: ["House Images/InteriorPictures/listing5/office5.png", "House Images/InteriorPictures/listing5/livingRoom5.png", "House Images/InteriorPictures/listing5/kitchen5.png", "House Images/InteriorPictures/listing5/diningRoom5.png", "House Images/InteriorPictures/listing5/bathroom5.png"]
    },
    {
        image: "House Images/listing7.jpg",
        price: 680000,
        size: 1730,
        shortDesc: "4-bed, 3-bath house with a hot tub and attached garage.",
        longDesc: "Indulge in this well-appointed house featuring a hot tub in the backyard, a spacious living area, and an attached garage. The master suite includes a private bathroom and walk-in closet.",
        location: "890 Elmwood Drive, Calgary",
        isListed: false,
        listingID: 7,
        noBathrooms: 3,
        noBedrooms: 4,
        noGarages: 1,
        floors: "Two Floors, All Wood",
        basement: true,
        type: "House",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: false,
        pool: true,
        backyard: true,
        interiorImages: ["House Images/InteriorPictures/listing5/office5.png", "House Images/InteriorPictures/listing5/livingRoom5.png", "House Images/InteriorPictures/listing5/kitchen5.png", "House Images/InteriorPictures/listing5/diningRoom5.png", "House Images/InteriorPictures/listing5/bathroom5.png"]
    },
    {
        image: "House Images/listing8.jpg",
        price: 720000,
        size: 2200,
        shortDesc: "Stylish 3-bed, 2.5-bath duplex with AC and a pool.",
        longDesc: "Live in luxury with this duplex offering air conditioning, a private pool, and high-end finishes throughout. The master bedroom includes a walk-in closet and an ensuite bathroom.",
        location: "901 Spruce Grove Avenue, Calgary",
        isListed: false,
        listingID: 8,
        noBathrooms: 2,
        noBedrooms: 3,
        noGarages: 0,
        floors: "Three Floors, All Laminated",
        basement: true,
        type: "Duplex",
        isFavorited: false,
        airCond: true,
        fireplace: false,
        driveway: false,
        pool: true,
        backyard: false,
        interiorImages: ["House Images/InteriorPictures/listing8/office8.png", "House Images/InteriorPictures/listing8/livingRoom8.png", "House Images/InteriorPictures/listing8/kitchen8.png", "House Images/InteriorPictures/listing8/diningRoom8.png", "House Images/InteriorPictures/listing8/bathroom8.png"]
    },
    {
        image: "House Images/listing9.jpg",
        price: 630000,
        size: 3100,
        shortDesc: "3-bed, 2-bath house with a finished basement and backyard.",
        longDesc: "This family-friendly house features a finished basement with a playroom, a spacious backyard, and a functional kitchen. Perfect for entertaining and family gatherings.",
        location: "102 Cedarwood Court, Calgary",
        isListed: false,
        listingID: 9,
        noBathrooms: 2,
        noBedrooms: 3,
        noGarages: 3,
        floors: "Two Floors, All Wood",
        basement: true,
        type: "House",
        isFavorited: false,
        airCond: true,
        fireplace: true,
        driveway: true,
        pool: false,
        backyard: true,
        interiorImages: ["House Images/InteriorPictures/listing9/office9.png", "House Images/InteriorPictures/listing9/livingRoom9.png", "House Images/InteriorPictures/listing9/kitchen9.png", "House Images/InteriorPictures/listing9/diningRoom9.png", "House Images/InteriorPictures/listing9/bathroom9.png"]
    },
    {
        image: "House Images/listing10.jpg",
        price: 740000,
        size: 2000,
        shortDesc: "Quaint 2-bed, 1-bath cottage-style home with a driveway.",
        longDesc: "Step into this charming single-story cottage with a private driveway, a sunlit living area, and a cozy backyard. Perfect for those seeking a simple, picturesque lifestyle.",
        location: "304 Oak Avenue, Calgary",
        isListed: false,
        listingID: 10,
        noBathrooms: 2,
        noBedrooms: 3,
        noGarages: 0,
        floors: "Three Floors, All Laminated",
        basement: true,
        type: "House",
        isFavorited: false,
        airCond: false,
        fireplace: true,
        driveway: true,
        pool: false,
        backyard: true,
        interiorImages: ["House Images/InteriorPictures/listing8/office8.png", "House Images/InteriorPictures/listing8/livingRoom8.png", "House Images/InteriorPictures/listing8/kitchen8.png", "House Images/InteriorPictures/listing8/diningRoom8.png", "House Images/InteriorPictures/listing8/bathroom8.png"]
    }];

// Functions to get and store local storage
function storeInLocalStorage() {
    sessionStorage.setItem("listings", JSON.stringify(listings));
}

function updateListingsFromStorage() {
    listings = JSON.parse(sessionStorage.getItem("listings"));
}

function getRandomListing(ran) {
    var listings_storage = JSON.parse(sessionStorage.getItem("listings"));
    return listings_storage[ran];
}

function setListed(ran) {
    var listings_storage = JSON.parse(sessionStorage.getItem("listings"));
    listings_storage[ran].isListed = true;
    sessionStorage.setItem("listings", JSON.stringify(listings_storage));
}

function setFavorite(id) {

}

function getListingsSize() {
    return listings.length;
}

function getUnlistedListing() {
    var listings_storage = JSON.parse(sessionStorage.getItem("listings"))
    for (let index = 0; index < listings_storage.length; index++) {
        if (listings_storage[index].isListed == false) {
            listings_storage[index].isListed = true;
            sessionStorage.setItem("listings", JSON.stringify(listings_storage));
            return listings_storage[index];
        }
    }
}

function getListingByID(id) {
    var listings_storage = JSON.parse(sessionStorage.getItem("listings"))
    var list = listings_storage.find((l) => l.listingID === parseInt(id));
    return list;
}

/*
// Pseudo search value, could be changed to be more complexed
const criteria = {
    price: { min: 700000, max: 900000 },
    homeType: 'Single Family',
    noBedrooms: { min: 3 },
    noBathrooms: { min: 2 },
    noGarage: { min: 1 },
    houseSize: { min: 1500, max: 2500 }
};*/


// filterListings is called when the submit form button for the advanced search filter is called
function filterListings() {
    var minPriceSlider = document.getElementById("MinimumPrice");
    var maxPriceSlider = document.getElementById("MaximumPrice");
    var minSizeSlider = document.getElementById("MinimumSize");
    var maxSizeSlider = document.getElementById("MaximumSize");
    var homeType = document.getElementById("type");
    var bedroomsNo = document.getElementById("beds");
    var bathroomsNo = document.getElementById("baths");
    var garagesNo = document.getElementById("garages");

    var bYard = document.getElementById("backyard").checked;
    var base = document.getElementById("basement").checked;
    var AC = document.getElementById("airCond").checked;
    var fplace = document.getElementById("fireplace").checked;
    var dWay = document.getElementById("dWay").checked;
    var pool = document.getElementById("pool").checked;

    var minPrice = minPriceSlider.value;
    var maxPrice = maxPriceSlider.value;
    var minSize = minSizeSlider.value;
    var maxSize = maxSizeSlider.value;
    var type = homeType.value;
    var beds = parseInt(bedroomsNo.value);
    var baths = parseFloat(bathroomsNo.value);
    var garages = parseInt(garagesNo.value);

    if(minPrice >= maxPrice || minSize >= maxSize)
    {
        document.getElementById("invalidSearch").hidden = false;
        return;
    }
    else
    {
        document.getElementById("invalidSearch").hidden = true;
    }

    var filteredListings = [];
    for (var i = 0; i < listings.length; i++) {
        match = true;
        if (type != "Home Type" && type != listings[i].type) {
            match = false;
        }
        if (beds != NaN && beds > parseInt(listings[i].noBedrooms)) {
            match = false;
        }
        if (baths != NaN && baths > parseFloat(listings[i].noBathrooms)) {
            match = false;
        }
        if (garages != NaN && garages > parseInt(listings[i].noGarages)) {
            match = false;
        }
        if (minPrice > listings[i].price || maxPrice < listings[i].price) {
            match = false;
        }
        if (minSize > listings[i].size || maxSize < listings[i].size) {
            match = false;
        }
        if (bYard && !listings[i].backyard) {
            match = false;
        }
        if (base && !listings[i].basement) {
            match = false;
        }
        if (AC && !listings[i].airCond) {
            match = false;
        }
        if (fplace && !listings[i].fireplace) {
            match = false;
        }
        if (dWay && !listings[i].driveway) {
            match = false;
        }
        if (pool && !listings[i].pool) {
            match = false;
        }
        if (match) {
            filteredListings.push(listings[i])
        }
    }
    console.log(filteredListings)

    criteria = [minPrice, maxPrice, minSize, maxSize, type, beds, baths, garages, bYard, base, AC, fplace, dWay, pool];
    sessionStorage.setItem("filter-criteria", JSON.stringify(criteria));
    sessionStorage.setItem("filtered-listings", JSON.stringify(filteredListings));
    location.href = "filteredListings.html"
}

function HTMLConversion(filteredListings) {
    // The HTML code will be stored in var listingDiv

    // Add the filtered listings to the container
    filteredListings.forEach(function (listing) {
        // Create a new div for the listing
        var listingDiv = document.createElement('div');
        listingDiv.className = 'row border border-2 border-dark-subtle rounded-top rounded-bottom mb-1 row-overrides';

        // Add the listing details to the div
        listingDiv.innerHTML = `
            <div class="col-sm-3">
                <img src="${listing.image}" class="img-fluid img-thumbnail" alt="..." id="listing-${listing.listingID}-image">
            </div>
            <div class="col-sm-9" id="listing${listing.listingID}">
                <div class="row">
                    <div class="col-sm-3 fw-bold fs-2" id="listing-${listing.listingID}-price">
                        ${listing.price}
                    </div>
                    <div class="col-sm-7 fw-bold fs-3 text-center" id="listing-${listing.listingID}-location">
                        ${listing.location}
                    </div>
                </div>
                <div class="row">
                    <div class="col fs-3" id="listing-${listing.listingID}-desc">
                        ${listing.description}
                    </div>
                </div>
                <div class="row">
                    <button name="view-${listing.listingID}" type="button" class="btn btn-primary"
                        onclick='saveListing(document.getElementsByName("view-${listing.listingID}")[0].id)'>View Listing</button>
                </div>
            </div>
        `;

        // Add the listing div to the container
        listingsContainer.appendChild(listingDiv);
    });
    return listingDiv;
}

function resetFilters() {
    document.getElementById("MinimumPrice").value = 250000;
    document.getElementById("MaximumPrice").value = 750000;
    document.getElementById("MinimumSize").value = 1700;
    document.getElementById("MaximumSize").value = 3900;
    document.getElementById("type").value = "Home Type"
    document.getElementById("beds").value = "No. of Bedrooms";
    document.getElementById("baths").value = "No. of Bathrooms";
    document.getElementById("garages").value = "No. of Garages";

    var minPriceSlider = document.getElementById("MinimumPrice");
    var maxPriceSlider = document.getElementById("MaximumPrice");
    var minSizeSlider = document.getElementById("MinimumSize");
    var maxSizeSlider = document.getElementById("MaximumSize");
    var minPriceOutput = document.getElementById("minPrice");
    var maxPriceOutput = document.getElementById("maxPrice");
    var minSizeOutput = document.getElementById("minSize");
    var maxSizeOutput = document.getElementById("maxSize");

    minPriceOutput.innerHTML = minPriceSlider.value;
    maxPriceOutput.innerHTML = maxPriceSlider.value;
    minSizeOutput.innerHTML = minSizeSlider.value;
    maxSizeOutput.innerHTML = maxSizeSlider.value;

    document.getElementById("backyard").checked = false;
    document.getElementById("basement").checked = false;
    document.getElementById("airCond").checked = false;
    document.getElementById("fireplace").checked = false;
    document.getElementById("dWay").checked = false;
    document.getElementById("pool").checked = false;
    document.getElementById("invalidSearch").hidden = true;
}

//const filteredListings = filterListings(listings);
window.onload = function () {
    document.getElementById('filter').addEventListener('click', filterListings);
    document.getElementById('reset').addEventListener('click', resetFilters);
}