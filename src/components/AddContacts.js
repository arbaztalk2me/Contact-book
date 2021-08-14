import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addContact } from "../action/action";
import { useHistory } from "react-router-dom";
function AddContacts(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const createcontact = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-dark text-light">ADD CONTACTS</div>
      <div className="card-body">
        <form onSubmit={(e) => createcontact(e)}>
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
            Add To Contacts
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContacts;
