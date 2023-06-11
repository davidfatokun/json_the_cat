const request = require('request')
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function (breedName, callback) {
    request(url + breedName, (error, response, body) => {
        const data = JSON.parse(body);
        let desc = null;
        if(data[0] !== undefined || data.length !== 0){
            desc = data[0].description;
        }
        callback(error, desc)
    });
};

module.exports = {fetchBreedDescription};
