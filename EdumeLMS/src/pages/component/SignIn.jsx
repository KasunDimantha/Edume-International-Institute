import React, { useState } from "react";
import axios from 'axios';
import signinimg from "./img/photo02.avif";
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
    axios.post('', {email, password})
    .then(result => {
      console.log(result)
      if(result.data === "SuccessAdmin") {
        navigate('admin dashbord here')
      } else if (result.data === "SuccessTeacher") {
        navigate('teacher dashbord here')
      } else if (result.data === "SuccessStudent") {
        navigate('student dashbord here')
      }
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="h-h100 text-center">
      <img src={signinimg} alt="signinimg" className="h-h100 w-w100%" />

      <div className="flex justify-center absolute w-w90% text-center pl-5 pr-5 top-32 ">
        <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-w450 h-h500 m-5">
          <h2 className="mt-16 pl-16 font-bold text-xl">Loging Here !!!</h2>
          <p className="mt-10 pl-16 font-bold text-lg">
            Loging Using Social Networks
          </p>
          <div className="flex pl-16">
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
            <div className="mt-10 pl-16">
              <p className="font-bold mb-2">Email</p>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5 pl-16">
              <p className="font-bold mb-2">Password</p>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-10">
                <button className="text-5 border-none cursor-pointer bg-[#a83030d7] text-white pt-3 pb-3 pl-20 pr-20 rounded-xl">
                  Sign In
                </button>
            </div>
          </form>

        </div>

        <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-w450 h-h500 m-5">
          <h2 className="pl-16 text-3xl font-bold mt-14">New Here ?</h2>
          <p className="pl-16 text-lg font-bold mt-12">
            Sign up and discover a great <br />
            amount of new opportunities!
          </p>
          <div className="flex justify-center mt-10">
            <Link to="/signUpPage">
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
