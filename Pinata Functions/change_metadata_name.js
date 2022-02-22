const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');

const metadata = {
    name: 'NFT DATA123344',
    
};
/// here hash use your existing file hash to change data on that hash
pinata.hashMetadata('QmV6aorRKrW7bkrBpsH66cteawEgkER1tLqqMQnzXaBDgM', metadata).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});



// Response

// OK