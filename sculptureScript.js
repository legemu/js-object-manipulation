const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
/*for (const key in element){
    console.log(`${key}: ${element[key].length}`)
}*/

const sculptureListLengths = {}; // Empty object to store results

for (let i = 0; i < sculptureList.length; i++) { // For loop to iterate though each object within sculptureList
    
    const target = { // Target object created in order to hold lengths of our properties
        name: [],
        artist: [],
        description: [],
        url: [],
        alt: [],
    };
    const source = { // Source object created in order to collect lengths of the following properties
        name: (sculptureList[i]).name.length,
        artist: sculptureList[i].artist.length,
        description: sculptureList[i].description.length,
        url: sculptureList[i].url.length,
        alt: sculptureList[i].alt.length,
     };

    Object.assign(target, source); // Combines the source information into the target

    sculptureListLengths[i] = target; // Store target data with the index of sculptureListLengths

}