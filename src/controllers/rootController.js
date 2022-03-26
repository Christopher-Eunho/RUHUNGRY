import path from "path";
import yelp from "yelp-fusion";

const apiKey = '6xRLOT2hzxA37NUpkb0rsyv92fqMhNv8O_c-2_PC04Ryt--xS5xQUQru2A8orO8EojnhSO5mjsUyFUvGFr0MSosv6b4FDMItXK60QMwRmqb7U4yMZ4M_Et_NOTU_YnYx';
const clientId = 'k0nxX4jW8f0f45dVAD5_tQ';


var locationInput = '2366 Main Mall, Vancouver, BC, Canada';
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

export const handlePost = async (req, res) => {
    const {body : {terms, location, radius}} = req;

    const searchRequest = {
        terms,
        location,
        radius: parseInt(radius), 
        open_now: true
      };

      console.log(searchRequest);
      const client = yelp.client(apiKey);
      const response = await client.search(searchRequest);
    //   console.log(response);
      const count = Object.keys(response.jsonBody.businesses).length;
      const randomResult = Math.floor(Math.random() * count);
      const firstResult = await response.jsonBody.businesses[randomResult];
    
      console.log(firstResult);



    //   var firstResult;
    // var prettyJson;

    // var name;
    // var image;
    // var rating;

    // var phone_number;
    // var price;

    // const response client.search(searchRequest);


    // client.search(searchRequest).then(response => {
    // prettyJson = JSON.stringify(firstResult, null, 4);
    // // console.log(prettyJson);
    // }).catch(e => {
    // console.log(e);
    // }).then(next => {
    // name = firstResult.name;
    // image = firstResult.image_url;
    // rating = firstResult.rating;
    // location = firstResult.location.display_address;
    // phone_number = firstResult.display_phone;
    // price = firstResult.price;
    // console.log(name);
    // console.log(image);
    // console.log(rating);
    // for (let i = 0; i < location.length; i++) {
    //     console.log(location[i]);
    // }
    // console.log(phone_number);
    // console.log(price);
    // });
}