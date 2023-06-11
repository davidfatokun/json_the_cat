let args = process.argv;
args = args.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

const request = require('request');
request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    } 
    const data = JSON.parse(body);
    if(data.length === 0) {
      console.log('Unable to find: ' + args[0]);
      return;
    }
    console.log(data[0].description);
});