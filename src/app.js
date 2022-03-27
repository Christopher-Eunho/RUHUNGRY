// -------------------------------------------------
// CONSTANTS:
// For user query inputs:
const form = document.querySelector("#searchForm"); // Select searchForm:

// For displaying results:
const queryBox =  document.querySelector("#queryBox"); 
const queriedContainer = document.querySelector("#queriedContainer");

// -------------------------------------------------
// FUNCTIONS: 

// Query submission: 
form.addEventListener('submit', async function(e) { // Add event listener (submit): 
    e.preventDefault();
    queryBox.classList.remove("is-hidden"); // unhide queryBox
    queriedContainer.innerHTML = ""; // reset queryContainer to be empty
    console.log("Submitted!");
    // Grab query value
    const searchedQuery = form.elements.locationQuery.value; 
    console.log(`Query: ${searchedQuery}`);

    // if (results.data.length === 0) { // check if there are any results to display
    //     console.log("No result to display");
    //     const msg = document.createElement("h2");
    //     msg.innerText = "No result to display."   
    //     queriedContainer.append(msg);
    // } else {
    //     createImages(results);
    // }
    
})

// createImages
// MODIFIES: document
// EFFECTS: takes the queried results and displays the image of each result as an HTML element
// function createImages(results) {
//     const queriedShows = results.data;
//     for (let result of queriedShows) {
//         createImg(result);
//     }
// }

// createImg
// MODIFIES: document
// EFFECTS: takes a single result and displays the image as an HTML element
// function createImg(result) {
//     const img = document.createElement("img");
//         img.src = result.show.image.medium;
//         img.classList.add("mx-5", "my-5");
//         queriedContainer.append(img); // <== append to queryBox container
// }

