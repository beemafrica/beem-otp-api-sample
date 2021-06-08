const axios = require("axios");
const https = require("https");
var btoa = require("btoa");

const content_type = "application/json";

//.... replace <api_key> and <secret_key> with the valid keys obtained from the platform, under profile>authentication information

const api_key = "<api_key>";
const secret_key = "<secret_key>";

const content_type = "application/json";
function pin_verify() {
  axios
    .post(
      "https://otp.beem.africa/api/v1/verify",
      {
        pinId: "8fa81447-4a14-4c2f-925b-78be40047c63",
        pin: "241663",
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
    .then((response) => console.log("success", response))
    .catch((error) => console.error(error));
}

pin_verify();
