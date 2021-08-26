const fs = require("fs").promises;
const filePath = require("./filePath");

const updateContacts = async (arrayOfContacts) => {
  const contactsString = JSON.stringify(arrayOfContacts);
  await fs.writeFile(filePath, contactsString);
};

module.exports = updateContacts;
