import React from "react";

export default function AddContact() {
  return (
    <div className="formpage">
      <h2>Add Contact</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Email-id"
          />
        </div>
       <br></br>
        <button type="submit" class="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
