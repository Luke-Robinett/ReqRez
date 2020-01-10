const fs = require("fs");
const axios = require("axios");

// Read in a JSON file with the request info
function readJSON(filename) {
 fs.readFile(filename, (err, res) => {
  if (err) {
   throw err;
  }

  const dataJSON = JSON.parse(res);

  switch (dataJSON.method.toUpperCase()) {
   case "GET":
    axios.get(dataJSON.url)
     .then((res) => {
      console.log(res.data);
     })
     .catch(err => {
      console.log(err);
     });
    break;
   case "POST":
    axios.post(dataJSON.url, dataJSON.body)
     .then((res) => {
      console.log(res.data);
     })
     .catch(err => {
      console.log(err);
     });
    break;
   default:
    console.log("Specified method is either invalid or not yet supported.");
    break;
  }
 });
}

// Output the response

function init() {
 if (process.argv.length >= 3) {
  const filename = process.argv[2];
  readJSON(filename);
 } else {
  console.log("No file specified.");
 }
}

init();
