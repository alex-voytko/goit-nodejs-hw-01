const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const del = async (id) => {
  try {
    const contacts = await getAll();
    const index = contacts.findIndex((contact) => contact.id === id);

    if (index === -1) {
      throw new Error(`Contact with id ${id} has not been found!`);
    }
    const newContacts = contacts.filter((contact) => contact.id !== id);
    await updateContacts(newContacts);

    return contacts[index];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
