import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import {ToastContainer, toast} from "react-toastify"


export const Register = () => {

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    toast.success("success")
  }
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [passwod, setpasswod] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  return (
    <>
      <Header />
      <ToastContainer/>
      <div className="register">
        <h1>register user</h1>
        <form className="text-center m-3" onSubmit={handlesubmit}>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value={name}
              required
              onChange={(e)=>{setname(e.target.value)}}
              placeholder="Enter Full Name"
            />

          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              placeholder="Enter Email"
              required
            />

          </div>

          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              value={passwod}
              onChange={(e)=>{setpasswod(e.target.value)}}
              placeholder="Enter password"
              required
            />

          </div>

          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              value={phone}onChange={(e)=>{setphone(e.target.value)}}
              placeholder="Enter phone"
              required
            />

          </div>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value={address}
              onChange={(e)=>{setaddress(e.target.value)}}
              placeholder="Enter Address"
              required
            />

          </div>



          {/*
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label htmlFor="">Accept terms and conditions</label>
          </div>
          */}
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>

  );
};
