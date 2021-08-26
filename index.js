const contactsOperations = require("./db");

(async () => {
  try {
    // const contacts = await contactsOperations.getAll();
    // console.log(contacts);
    const id = 5;
    // const getOneContact = await contactsOperations.getById(id);
    // console.log(getOneContact);
    // const updateContact = await contactsOperations.update(id, {
    //   name: "Tom Jackson",
    // });
    // console.log(updateContact);
    // const deleteContact = await contactsOperations.del(id);
    // console.log(deleteContact);
    const newData = {
      name: "Ann Gilberd",
      email: "anngilberd@gmail.com",
      phone: "(754) 325-7475",
    };
    const addContact = await contactsOperations.add(newData);
  } catch (error) {
    console.log(error.message);
  }
})();
