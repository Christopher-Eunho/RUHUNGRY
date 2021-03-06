import path from "path";
import yelp from "yelp-fusion";

const apiKey = '6xRLOT2hzxA37NUpkb0rsyv92fqMhNv8O_c-2_PC04Ryt--xS5xQUQru2A8orO8EojnhSO5mjsUyFUvGFr0MSosv6b4FDMItXK60QMwRmqb7U4yMZ4M_Et_NOTU_YnYx';
const clientId = 'k0nxX4jW8f0f45dVAD5_tQ';

// export const handleHome = (req, res) => {
//     res.sendFile(path.join(__dirname+'/../home.html'));
// }


export const handleHome = (req, res) => {
  res.render("home", {showResult:false});
}

export const handleCSS = (req, res) => {
  res.sendFile(path.join(__dirname+'/../app.css'));
}

export const handlePost = async (req, res) => {
    const {body : {terms, location, radius}} = req;
    console.log(req.body);

    const searchRequest = {
        term: terms,
        location: location,
        radius: parseInt(radius)*1000, 
        open_now: true,
        categories: "restaurants, All",
        limit: 5
      };

    const client = yelp.client(apiKey);
    const response = await client.search(searchRequest);
    const count = Object.keys(response.jsonBody.businesses).length;
    const randomResult = Math.floor(Math.random() * count);
    const result = await response.jsonBody.businesses[randomResult]
      
    const restaurantURL = await genGoogleLink(result.coordinates.latitude, result.coordinates.longitude, result.name);
    const name = result.name;
    const image = result.image_url;
    const rating = result.rating;
    const phone_number = result.display_phone;
    const price = result.price;

    const location_array = result.location.display_address;
    let address = "";
    for (let i = 0; i < (location_array.length - 1); i++) {
      address += location_array[i] + " ";
    }
    console.log(address);
    console.log(price);
    console.log(restaurantURL);
    console.log(typeof rating);

    const starRating =  "⭐".repeat(parseInt(rating));
    console.log(starRating);
    
    res.render("home", {showResult:true, name, 
      image, 
      starRating, 
      price, 
      address,
      restaurantURL});



    // pass x coord, y coord, and name string
    // returns google maps link to place
    function genGoogleLink(x, y, name) {
        var link = "https://www.google.com/maps/search/?api=1&query=";
        link = link + String(x) + "%2C" + String(y) + "%2C+" + String(name);
        return link;
    }
}