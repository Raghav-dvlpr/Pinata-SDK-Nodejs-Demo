const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');
// paste your url yo unpin data
pinata.unpin('QmbgPVFEewVMjzaDWByi3RgKsUge1Bw81bLFLEiTGbdPUM').then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});



// RESPONSE

// OK