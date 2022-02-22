const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');

const fs = require('fs');
const readableStreamForFile = fs.createReadStream('./index.jpeg');
const options = {
    pinataMetadata: {
        name: "Tree",
        description:"treee sunset"
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});



// Response

// {
//     IpfsHash: 'QmYFQKAWgf9shjNm5CetXz2r1vJ5FHd1FXaWh4votXNSN4',
//     PinSize: 5417,
//     Timestamp: '2022-02-02T06:14:29.553Z'
//   }