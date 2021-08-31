const idMaker = (arrayOfContacts) => {
  const gotArrOfIds = arrayOfContacts.map((contact) => contact.id);
  const maxValue = Math.max.apply(Math, gotArrOfIds);
  return maxValue + 1;
};

module.exports = idMaker;
