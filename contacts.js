const fs = require("fs");

fs.readFile("example.txt", (error, data) => {
  console.log(error);
  console.log(data);
});
