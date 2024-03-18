import React, { useState, useEffect } from "react";
import poto1 from "./s_img/hand.jpg";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";

function S_CeditProfile() {
  const [activeTab, setActiveTab] = useState("Table");
  const [stu, setStu] = useState([]);
  const [email01, setEmail01] = useState("sahan@gmail.com");
  const [name, setFname] = useState();
  const [email, setEmail] = useState();
  const [con_number, setCnumber] = useState();
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);
  const id01 = "65ee92feededae15b13e2e7e";

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  useEffect(() => {
    console.log("hi kasun");
    axios
      .get(`http://localhost:3002/User/${id01}`)
      .then((result) => {
        setStudent(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
    console.log(stu);
  }, []);


  const handleSubmit = (e) => {
    console.log("clicked button");
    e.preventDefault();
    axios
      .patch(`http://localhost:3002/User/${id01}`, { name, email, con_number })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    setSelectedOption("");
   
  };

  return (
    <div>
      <div className="h-h100 ">
        <img src={poto1} alt="poto1" className="h-h100 w-w100% " />

        <div className=" relative -mt-top bottom-20 ">
          {activeTab === "Table" && (
            <div>
              <div className="mt-36 ml-16 bg-slate-300 pt-5 pb-5 pl-5 pr-5 w-w450 rounded-xl">
                {
                  student &&
                    student.map((user) => (
                      <div>
                        <p ket={user._id} className=" bg-slate-400 rounded-lg mt-2 pl-3">
                          Name : {user.name}{" "}
                        </p>
                        <p ket={user._id} className=" bg-slate-400 rounded-lg mt-2 pl-3">
                          Email : {user.email}{" "}
                        </p>
                        <p ket={user._id} className=" bg-slate-400 rounded-lg mt-2 pl-3">
                          Con Number : {user.con_number}{" "}
                        </p>
                        <p ket={user._id} className=" bg-slate-400 rounded-lg mt-2 pl-3">
                          Role : {user.role}{" "}
                        </p>
                      </div>
                    ))
                }
              </div>
              <button
                className="ml-16 mt-20 text-5 border-none cursor-pointer bg-[#125a5ed7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl"
                onClick={() => handleTabClick("Update")}
              >
                Edit Details
              </button>
            </div>
          )}
          {activeTab === "Update" && (
            <div className="flex justify-center mt-36">
              <div className=" bg-[#c0e1ed] w-64 place-content-center rounded-md">
                <div className="right-0 flex justify-end">
                  <p   onClick={() => handleTabClick("Table")} className="cursor-pointer w-6 text-xl right-0 pr-1 pt-1 hover:text-red-600"><MdOutlineCancel /></p>
                </div>
                

                <form onSubmit={handleSubmit}>

                  <div className="mt-1 pl-8">
                    <p className="font-bold mb-1">Full Name</p>
                    <input
                      type="text"
                      placeholder="Full Name"
                      autoComplete="off"
                      name="name"
                      className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>

                  <div className="mt-1 pl-8">
                    <p className="font-bold mb-1">Email</p>
                    <input
                      type="email"
                      placeholder="email"
                      autoComplete="off"
                      name="email"
                      className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-1 pl-8">
                    <p className="font-bold mb-1">Contact Number</p>
                    <input
                      type="text"
                      placeholder="Contact No"
                      autoComplete="off"
                      name="con_number"
                      className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                      onChange={(e) => setCnumber(e.target.value)}
                    />
                  </div>

                  <div className="flex mt-4 pl-10 pb-5">
                    <button
                      className="text-5 border-none cursor-pointer bg-[#125a5ed7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl"
                    >
                      Update
                    </button>
                  </div>

                </form>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default S_CeditProfile;
