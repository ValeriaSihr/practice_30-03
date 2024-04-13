import {
  createContact,
  deleteContactById,
  getAllContacts,
  getContactById,
  updateContactbyID,
} from './js/api';

getContactById(12);
createContact({
  name: 'V',
  phone: '234',
});
updateContactbyID(15, {
  name: 'V',
  phone: '234',
});
deleteContactById(16);
getAllContacts();
