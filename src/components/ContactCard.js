import React from 'react'

const ContactCard = (props) => {
  const { id, name,MobileNo, email } = props.contact;  //destructuring krr rha hu
  return (
    <div className="row">
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-title">{MobileNo}</p>
          <p className="card-text">{email}</p>
          <i style={{color:"red"}} className="bi bi-trash-fill"  onClick={() => props.clickHander(id)}></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactCard