import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    MobileNo: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "",MobileNo:"", email: "" });
    // console.log(this.state)
  };
  
  render() {
    return (
      <div className="formpage">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div className="form-group">
            <label style={{ padding: "15px 0px 12px 0px" }} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label style={{ padding: "15px 0px 12px 0px" }} htmlFor="Number">
              Mobile No
            </label>
            <input
              type="Number"
              className="form-control"
              placeholder="Enter Mobile No"
              value={this.state.MobileNo}
              onChange={(e) => this.setState({ MobileNo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label style={{ padding: "15px 0px 12px 0px" }} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email-id"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
        <br></br>
      </div>
    );
  }
}
export default AddContact;
