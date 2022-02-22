const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('0f0e7a66230c76a9b2cb', 'b99c1bbe4ed98c3a393ec8500c8393c89258216f960831b4c3adb1581bca6f5b');


pinata.userPinnedDataTotal().then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});


// RESPONSE

//{ count: 0, rows: [] }









// const newPinPolicy = {
//     customPinPolicy: {
//     regions: [
//             {
//                 id: 'FRA1',
//                 desiredReplicationCount: 2
//             },
//             {
//                 id: 'NYC1',
//                 desiredReplicationCount: 2
//             }
//         ]
//     }
// }

// pinata.hashPinPolicy('QmV6aorRKrW7bkrBpsH66cteawEgkER1tLqqMQnzXaBDgM', newPinPolicy).then((result) => {
//     //handle results here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });