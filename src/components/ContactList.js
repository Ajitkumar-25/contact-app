import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact}  clickHander={deleteConactHandler}
      key={contact.id}/>
    );
  });

  return (
    <div className="list">
      <h2>{renderContactList}</h2>
    </div>
  );
}
