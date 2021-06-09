const axios = require("axios");
const https = require("https");
const btoa = require("btoa");

const content_type = "application/json";
const api_key = "<api_key>";
const secret_key = "<secret_key>";

function pin_request() {
  axios
    .post(
      "https://apiotp.beem.africa/v1/request",
      {
        appId: 1,
        msisdn: "255701000000",
      },
      {
        headers: {
          "Content-Type": content_type,
          Authorization: "Basic " + btoa(api_key + ":" + secret_key),
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    )
    .then((response) => console.log("success", response.data))
    .catch((error) => console.error(error));
}

pin_request();