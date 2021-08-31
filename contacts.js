const fs = require("fs").promises;
const path = require("path");

const idMaker = require("./idMaker");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = await JSON.parse(data);

    console.table(contacts);
  } catch (error) {
    throw error;
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = await JSON.parse(data);
    const selectedContact = contacts.find(
      (contact) => String(contact.id) === contactId
    );
    if (!selectedContact) {
      throw new Error(`Contact with id ${contactId} has not been found!`);
    }
    console.table(selectedContact);
    return selectedContact;
  } catch (error) {
    throw error;
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = await JSON.parse(data);
    const index = contacts.findIndex(({ id }) => id === Number(contactId));
    if (index === -1) {
      throw new Error(`Contact with id ${contactId} has not been found!`);
    }
    const newContacts = contacts.filter(({ id }) => id !== Number(contactId));
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    console.log(`Contact with id -${contactId}- has been removed.
    View your current contacts list: `);
    console.table(newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
};

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = await JSON.parse(data);
    const newContact = {
      id: idMaker(contacts),
      name: name,
      email: email,
      phone: phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log(`New contact has been added!
    View your current contacts list: `);
    console.table(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
