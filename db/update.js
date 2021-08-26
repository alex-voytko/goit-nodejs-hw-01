const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const update = async (id, updateData) => {
  try {
    const contacts = await getAll();
    const index = contacts.findIndex((contact) => contact.id === id);

    if (index === -1) {
      throw new Error(`Contact with id ${id} has not been found!`);
    }

    contacts[index] = { ...contacts[index], ...updateData };
    await updateContacts(contacts);

    return contacts[index];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
