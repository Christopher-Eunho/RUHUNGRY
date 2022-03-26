import path from "path";
import yelp from "yelp-fusion";

const apiKey = '6xRLOT2hzxA37NUpkb0rsyv92fqMhNv8O_c-2_PC04Ryt--xS5xQUQru2A8orO8EojnhSO5mjsUyFUvGFr0MSosv6b4FDMItXK60QMwRmqb7U4yMZ4M_Et_NOTU_YnYx';
const clientId = 'k0nxX4jW8f0f45dVAD5_tQ';


var locationInput = '2366 Main Mall,  Vancouver, BC, Canada';
var categoryInput = 'Chinese';
var radiusInput = 1000;  // in metres (1000/2000/5000/10000)

const searchRequest = {
    terms: categoryInput,
    location: locationInput,
    radius: radiusInput, 
    open_now: true
  };

export const handleHome = (req, res) => {
    res.sendFile(path.join(__dirname+'/../home.html'));
}

// receives input from html form and passes it to the get request 
export const handlePost = async (req, res) => {
    const {body : {terms, location, radius}} = req;

    const searchRequest = {
        terms,
        location,
        radius: parseInt(radius), 
        open_now: true
      };

      // display search parameters on console
      console.log(searchRequest);

      const client = yelp.client(apiKey);
      const response = await client.search(searchRequest);
      const count = Object.keys(response.jsonBody.businesses).length;
      const randomResult = Math.floor(Math.random() * count);
      const firstResult = await response.jsonBody.businesses[randomResult]
      const restaurantURL = await genGoogleLink(firstResult.longitude, firstResult.latitude, firstResult.name);
      
    
      console.log(firstResult);
      console.log(restaurantURL);

    // pass x coord, y coord, and name string
    // returns google maps link to place
    function genGoogleLink(x, y, name) {
        var link = "https://www.google.com/maps/search/?api=1&query=";
        link = link + String(x) + "%2C" + String(y) + "%2C+" + String(name);
        return link;
    }
}