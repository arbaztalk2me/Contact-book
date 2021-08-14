import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { updateContacts } from "../action/action";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../action/action";
import { useHistory, useParams } from "react-router-dom";
function EditContact(props) {
  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const updateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      email: email,
      phone: phone,
    });
    dispatch(updateContacts(update_contact));
    console.log(update_contact);
    history.push("/");
  };

  useEffect(() => {
    dispatch(getContact(id));
    if (contact != null) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    }
  }, [contact]);
  return (
    <div className="card shadow">
      <div className="card-header bg-dark text-light">EDIT CONTACTS</div>
      <div className="card-body">
        <form onSubmit={(e) => updateContact(e)}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Phone No.</label>
            <input
              type="text"
              class="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
