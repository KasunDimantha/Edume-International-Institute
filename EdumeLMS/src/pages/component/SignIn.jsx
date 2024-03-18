import React, { useState } from "react";
import axios from 'axios';
import signinimg from "/src/pages/component/img/book-with-pencil-cup-with-stationery-desk.jpg";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./img/Facebook.png";
import img2 from "./img/Google.png";
import img3 from "./img/linkedin.png";

function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/Admin/login', {email, password})
    .then(result => {
      if (result.data === "Success") {
        navigate('/a_dashbord')
      } else if (result.data === "user not exist") {
          
      } 
    })
    .catch(err => console.log(err));

    e.preventDefault()
    axios.post('http://localhost:3002/Teacher/login', {email, password})
    .then(result => {
      if (result.data === "Success") {
        navigate('/t_dashbord')
      } else if (result.data === "user not exist") {
          
      } 
    })
    .catch(err => console.log(err));

    e.preventDefault()
    axios.post('http://localhost:3002/Student/login', {email, password})
    .then(result => {
      if (result.data === "Success") {
        navigate('/s_dashbord')
      } else if (result.data === "user not exist") {
          
      } 
    })
    .catch(err => console.log(err));
  };

  return (
   

    <div className="bg-sign min-h-screen text-center">
       
      {/* <img src={signinimg} alt="signinimg" className="h-screen w-full" /> */}

      <div className="flex justify-center w-w90% text-center pl-5 pr-5 top-32 ">
        <div className="items-center font-sans rounded-xl bg-[#ffffff5e] w-1/4	 h-h500 mt-20 mr-28">
          <h2 className="mt-16  font-bold text-xl">Loging Here !!!</h2>
          <p className="mt-10  font-bold text-lg">
            Loging Using Social Networks
          </p>
          <div className="flex justify-center mt-3">
            <img
              src={img1}
              alt="facebook"
              className="cursor-pointer w-8 h-8 mt-1 mr-3"
            />
            <img src={img2} alt="google" className="cursor-pointer w-12 h-12" />
            <img
              src={img3}
              alt="linedin"
              className="cursor-pointer w-12 h-12"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-10 ">
              <p className="font-bold mb-2">Email</p>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border-non outline-none px-3 py-2 font-sans text-1xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5 ">
              <p className="font-bold mb-2">Password</p>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="border-non outline-none px-3 py-2 font-sans text-1xl"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-10">
                <button className="text-5 border-none cursor-pointer bg-[#a83030d7] text-white m-8 px-12 py-3 rounded-xl">
                  Sign In
                </button>
            </div>
          </form>

        </div>

        <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-1/4	 h-h500 mt-20">
          <h2 className="pl-16 text-3xl font-bold mt-14">New Here ?</h2>
          <p className="pl-16 text-lg font-bold mt-12">
            Sign up and discover a great <br />
            amount of new opportunities!
          </p>
          <div className="flex justify-center mt-10">
            <Link to="/">
              <button className="text-5 mt-14 border-none cursor-pointer bg-[#a83030d7] text-white pt-3 pb-3 pl-20 pr-20 rounded-xl">
                Sign Up
              </button>

              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );


}




export default SignIn;