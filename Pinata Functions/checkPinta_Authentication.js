const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});


// Response

// { authenticated: true }