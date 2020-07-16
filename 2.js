const axios = require("axios");
const fs = require("fs");

var config = {
  responseType: "stream",
};

const fetch_cached = async (url, key) => {
  if (localStorage.getItem(key)) {
    let keyurl = localStorage.getItem(key);
    let resp = await axios.get(keyurl, config);
    resp.data.pipe(fs.createWriteStream("image.jpg"));
  } else {
    let resp = await axios.get(url, config);
    resp.data.pipe(fs.createWriteStream("image.jpg"));
  }
};

let url = "https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg";
let key = "down_key1";
fetch_cached(url, key);
