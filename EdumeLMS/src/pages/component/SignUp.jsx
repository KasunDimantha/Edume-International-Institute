import React, { useState } from "react";
import signupimg from "./img/photo02.avif";
import  { useSignup } from "../../hooks/useSignup";

function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnumber, setCnumber] = useState('');
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState('');
  const { signup, isLoading,  error } = useSignup()

  const handleCheckboxChange = (value) => {
    setRole(value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await signup(email, password, name, cnumber, role)
  };

  return (
    <div className="h-h100 text-center">
      <img src={signupimg} alt="signinimg" className="h-h100 w-w100%" />

      <div className="flex justify-center absolute w-w100% text-center pl-5 pr-5 top-28 ">
        <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-w450 h-h500 m-5">
          <h2 className="mt-3 pl-16 font-bold text-xl">Create An Account</h2>

          <form onSubmit={handleSubmit}>

            <div className="mt-1 pl-16">
              <p className="font-bold mb-1">Full Name</p>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                onChange={(e) => setName(e.target.value)}
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
                type="password"
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
                    checked={role === 'Admin'}
                    onChange={() => handleCheckboxChange('Admin')}
                />
                <p>Admin</p>
              </div>
              <div className="flex  pr-3">
                <input 
                    type="checkbox" 
                    name="Teacher" 
                    checked={role === 'Teacher'}
                    onChange={() => handleCheckboxChange('Teacher')}
                />
                <p>Teacher</p>
              </div>
              <div className="flex pr-3">
                <input 
                    type="checkbox" 
                    name="Student"
                    checked={role === 'Student'}
                    onChange={() =>  handleCheckboxChange('Student')}
                />
                <p>Student</p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button disabled={isLoading} className="text-5 border-none cursor-pointer bg-[#a83030d7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl">
                Sign UP
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
