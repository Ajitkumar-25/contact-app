import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuid } from "uuid";

// import ContactCard from  "./components/ContactCard"

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Ajit",
  //     MobileNo: "7063155883",
  //     email: "Kajit0408@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Himanshu",
  //     MobileNo: "706365432",
  //     email: "harshhimanshu@gmail.com",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      {/* <ContactCard/> */}
    </div>
  );
}

export default App;
