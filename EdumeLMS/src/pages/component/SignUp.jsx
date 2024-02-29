import React, { useState } from "react";
import axios from 'axios';
import signupimg from "./img/photo02.avif";

function SignUp() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [id, setId] = useState();
  const [fname, setFname] = useState();
  const [email, setEmail] = useState();
  const [cnumber, setCnumber] = useState();
  const [password, setPassword] = useState();

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(``, {id, fname, email, cnumber, password, selectedOption})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div className="h-h100 text-center">
      <img src={signupimg} alt="signinimg" className="h-h100 w-w100%" />

      <div className="flex justify-center absolute w-w100% text-center pl-5 pr-5 top-28 ">
        <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-w450 h-h500 m-5">
          <h2 className="mt-3 pl-16 font-bold text-xl">Create An Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mt-4 pl-16">
              <p className="font-bold mb-1">ID</p>
              <input
                type="text"
                placeholder="id"
                name="id"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="mt-1 pl-16">
              <p className="font-bold mb-1">Full Name</p>
              <input
                type="text"
                placeholder="Full Name"
                name="fname"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div className="mt-1 pl-16">
              <p className="font-bold mb-1">Email</p>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-1 pl-16">
              <p className="font-bold mb-1">Contact Number</p>
              <input
                type="text"
                placeholder="Contact No"
                name="cnumber"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setCnumber(e.target.value)}
              />
            </div>

            <div className="mt-1 pl-16">
              <p className="font-bold mb-1">Password</p>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            

            <div className="flex pl-16 mt-1">
              <div className="flex pr-3">
                <input 
                    type="checkbox" 
                    name="Admin" 
                    checked={selectedOption === 'Admin'}
                    onChange={() => handleCheckboxChange('Admin')}
                />
                <p>Admin</p>
              </div>
              <div className="flex  pr-3">
                <input 
                    type="checkbox" 
                    name="Teacher" 
                    checked={selectedOption === 'Teacher'}
                    onChange={() => handleCheckboxChange('Teacher')}
                />
                <p>Teacher</p>
              </div>
              <div className="flex pr-3">
                <input 
                    type="checkbox" 
                    name="Student"
                    checked={selectedOption === 'Student'}
                    onChange={() => handleCheckboxChange('Student')}
                />
                <p>Student</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="text-5 border-none cursor-pointer bg-[#a83030d7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl">
                Sign UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
