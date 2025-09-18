import React from "react";
import Form from 'react-bootstrap/Form';

function Alt_Reg() {
  return (
    <div>
      <h1>Regisztráció</h1>


      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>


    </div>
  );
}
export default Alt_Reg