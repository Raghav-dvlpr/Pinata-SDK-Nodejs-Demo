# Pinta Services using Pinata SDK's 🎠

- This Project is a Sample Template of Pinata and simple walkthrough of how to use Pinata service via Pinata SDK's.

## Requirements 

- Must have account in Pinata. 👤
- Go to Account Icon and genrate `API Keys.` 🔑
- Copy `yourPinataApiKey` and `yourPinataApiKey` from their site and paste it on your every `js` file where ever it is neccesary..

- Example: You will this line in your every `js` file in Pinata Functions Folder..
```
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('yourPinataApiKey', 'yourPinataSecretApiKey');
```

## Getting started 📖

📁 Create a new folder in VScode.  
- Open Your termial in Vscode and following commands. or press  `Ctrl+Shift+` `

🏃 Run: -- To Initalize Node.  ( Here `-y` means we are saying `yes` to all steps in node creation )
```
npm init -y
```


## Node Dependencies 🎒
Try ` npm i ` in cmd to install all nessecary dependencies mentioned in `package.json` file

or use 

``` 
npm install @pinata/sdk
```

## Run Pinata Services ⚙️ 🛠️
- Note `IPFS` Means `InterPlanetary File System`.

## Upload Image to IPFS  🖼️

```
node Pinata Functions/Upload_Image_to_IPFS.js
```
Response :
```
{
    IpfsHash: 'QmYFQKAWgf9shjNm5CetXz2r1vJ5FHd1FXaWh4votXNSN4',
    PinSize: 5417,
    Timestamp: '2022-02-02T06:14:29.553Z'
}
```
## Upload Folder to IPFS  📁 

```
node Pinata Functions/Upload_Folder_to_IPFS.js
```
Response :
```
{
    IpfsHash: 'QmXG9i6vszJBUAzUjk1fPeGA9Ag71fmpKYcJGTumA5BZ3f',
    PinSize: 343800,
    Timestamp: '2022-02-02T06:54:58.964Z'
}

```
## Upload Image or Folder Json Metadata to IPFS  📔

```
node Pinata Functions/Upload_Json_to_IPFS.js
```
Response :
```
{
    IpfsHash: 'QmX20i6vszJBUAzUjk1fPeGA9Ag71fmpKYcJGTumA5BZ3z',
    PinSize: 343900,
    Timestamp: '2022-02-02T06:55:58.9677'
}

```
## Check Pinata is Authenicated  ✅

```
node Pinata Functions/checkPinta_Authentication.js
```
Response :
```
{ authenticated: true }
```

## Get Pinata Pinned Data Count 🧮

```
node Pinata Functions/get_pinata_pinned_data_count.js
```
Response :
```
{
    pin_count: 9,
    pin_size_total: '7940798',
    pin_size_with_replications_total: '7940798'
}
```
# Change Metadata Name of your Image or Folder ✍️

```
node Pinata Functions/change_metadata_name.js
```
Response :
```
Ok
```

# Unpinning your Image or Folder from IPFS 🗑️

```
node Pinata Functions/UnPin_data_from_IPFS.js
```
Response :
```
Ok
```
# Offical Documentation Link 🔗
- Read Offical Documentation from Pinata SDK"s Site.
https://docs.pinata.cloud/pinata-node-sdk
