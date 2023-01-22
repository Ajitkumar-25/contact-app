import React from 'react'

const ContactCard = (props) => {
  return (
    <div className="row">
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.contact.name}</h5>
          <p className="card-title">{props.contact.MobileNo}</p>
          <p className="card-text">{props.contact.email}</p>
          <i style={{color:"red"}} className="bi bi-trash-fill"></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactCard