const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataApiKey');

const sourcePath = '/home/user/Training/Month 6 Blockchain/Pinata NodeJs Demo/assets';
const options = {
    pinataMetadata: {
        name: 'My Awesome Pictures',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFromFS(sourcePath, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});


// Response 

// {
//     IpfsHash: 'QmXG9i6vszJBUAzUjk1fPeGA9Ag71fmpKYcJGTumA5BZ3f',
//     PinSize: 343800,
//     Timestamp: '2022-02-02T06:54:58.964Z'
// }
