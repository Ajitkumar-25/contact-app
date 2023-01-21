import React from "react";
import Header from "./components/Header"
// import ContactList from "./components/ContactList"
// import ContactCard from  "./components/ContactCard"
import AddContact from "./components/AddContact"

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <ContactList/>
      <ContactCard/> */}
      <AddContact/>
    </div>
  );
}

export default App;
