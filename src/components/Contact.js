import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../action/action";

function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">
        <div classname="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"></label>
        </div>
      </th>
      <td>
        <Avatar name={contact.name} size="45" className="me-2" round={true} />
        {contact.name}
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td className="icons">
        <Link
          to={`/editcontact/${contact.id}`}
          className="fas fa-user-edit me-2 text-dark"
        ></Link>
        <a
          onClick={() => dispatch(deleteContacts(contact.id))}
          className="fas fa-minus-circle me-2 text-danger"
        ></a>
      </td>
    </tr>
  );
}

export default Contact;
