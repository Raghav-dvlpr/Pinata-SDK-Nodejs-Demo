const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');


pinata.userPinnedDataTotal().then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});


// Response

// {
//     pin_count: 9,
//     pin_size_total: '7940798',
//     pin_size_with_replications_total: '7940798'
// }