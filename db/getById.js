const getAll = require("./getAll");

const getById = async (id) => {
  try {
    const contacts = await getAll();
    const selectedContact = contacts.find((contact) => contact.id === id);
    if (!selectedContact) {
      throw new Error(`Contact with id ${id} has not been found!`);
    }
    return selectedContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getById;
