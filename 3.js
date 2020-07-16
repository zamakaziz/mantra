const cheerio = require("cheerio");
const request = require("request");

request(
  {
    method: "GET",
    url: "http://localhost/mantra/index1.html",
  },
  (err, res, body) => {
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let allEls = $("*");
    allItem = allEls.get();
    allItem.forEach((element) => {
      console.log(element.name);
    });
  }
);
