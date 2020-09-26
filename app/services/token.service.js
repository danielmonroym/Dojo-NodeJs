const axios = require("axios").default;
const qs= require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

let token  = "";


const getToken = async() => {

    let token = "";

    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",

        qs.stringify({
            grant_type: "client_credentials",
            client_id: "3d581c8dc55e46e3a853cebed7bb0c0f",
            client_secret: "159c61c190eb4d96bf67c470cc5e0c80",
        }),
        config
    );
    token = promise.data;
    return token.access_token;



}

module.exports = getToken;