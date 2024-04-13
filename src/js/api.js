import axios from 'axios';

axios.defaults.baseURL = 'https://64859281a795d24810b7146a.mockapi.io/work';

export const getAllContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const getContactById = async id => {
  try {
    const { data } = await axios.get(`/contacts/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const createContact = async pII => {
  try {
    const { data } = await axios.post('/contacts', pII);
    return data;
  } catch {
    console.log('ERROR', error);
  }
};

export const updateContactbyID = async (id, obj) => {
  try {
    const { data } = await axios.put(`/contacts/${id}`, obj);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const deleteContactById = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
};
