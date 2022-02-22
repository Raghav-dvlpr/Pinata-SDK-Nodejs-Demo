const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');

const body = {
    message: 'Pinatas are awesome',
    description:"NFT JSON data",
    imageurl:"## paste your Image or folder url"  //QmYFQKAWgf9shjNm5CetXz2r1vJ5FHd1FXaWh4votXNSN4
};
const options = {
    pinataMetadata: {
        name: "Treesunset NFT",
      
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinJSONToIPFS(body, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});