const { program } = require("commander");
const { v4 } = require("uuid");

const contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(contacts);
      break;

    case "get":
      if (action.id) {
        const tryToFindContact = contacts.find(({ id }) => action.id === id)
          ? console.log(tryToFindContact)
          : console.log(`Contact with id=${action.id} has not been found.`);
      } else {
        console.log("Couldn't find id.");
      }
      break;

    case "remove":
      if (action.id) {
        const findIndex = contacts.findIndex(({ id }) => action.id === id);
        if (findIndex === -1) {
          console.log(`There are no contact with id ${action.id}`);
        } else {
          const updatedContacts = contacts.filter(({ id }) => id !== action.id);
          console.log(
            `Contact with id ${action.id} has been removed! 
            Look to existing contacts:
            ${updatedContacts}`
          );
        }
      } else {
        console.log("Couldn't find id to remove contact");
      }
      break;

    case "add":
      if (name && email && phone) {
        const updatedContacts = contacts.push({
          id: v4(),
          name: name,
          email: email,
          phone: phone,
        });
        console.log(`New contact has been added. 
          View contacts List:
          ${updatedContacts}`);
      } else {
        console.log(`Typing error. 
    Please, type name by '-n', email by '-e' and phone by '-p'`);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
