export const CREATE_CONTACT = "CREATE_CONTACT";
export const GET_CONTACT = "GET_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContacts = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContacts = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
