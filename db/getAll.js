const fs = require("fs").promises;
const path = require("path");
const filePath = require("./filePath");

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAll;
