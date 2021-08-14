import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

function Contacts(props) {
  const contacts = useSelector((state) => state.contacts.users);
  console.log(contacts);
  return (
    <table class="table shadow table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault"></label>
            </div>
          </th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone No.</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </tbody>
    </table>
  );
}

export default Contacts;
