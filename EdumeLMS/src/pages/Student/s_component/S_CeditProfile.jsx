import React, {useState, useEffect} from "react";
import poto1 from "./s_img/hand.jpg";
import axios from "axios";

function S_CeditProfile() {

  const [activeTab, setActiveTab] = useState("Table");
  const [stu, setStu] = useState([])
  const [email01, setEmail01] = useState("sahan@gmail.com");
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [cnumber, setCnumber] = useState('');
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null)
  const id01 = "65ee92feededae15b13e2e7e"
/*
  useEffect(() => {
    const fetchStudent = async () => {
      const responce = await fetch('http://localhost:3002/User/', 
        {_id: '65ee92feededae15b13e2e7e'}
      )
      const json = await responce.json()
      setStudent(json)
      
      console.log(json)
    }

    fetchStudent()
  }, [])
*/
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.request({
        method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3002/User/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify({
    "_id": "65ee92feededae15b13e2e7e"
  })
      }).then(function (response) {
        console.log(response.data);
        setStudent(response.data);
      });
      //setStudent(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchData();
}, []);

/*
  useEffect(() => {
    console.log("hi kasun")
    axios.get('http://localhost:3002/User/', {_id: id01})
    .then(result => setStu(result.data), console.log(result.data))
    .catch(error => console.log(error))
    console.log(stu);
  }, [])
*/
  /*useEffect(() => {
    console.log("hi kasun")
    axios.get(`http://localhost:3002/Student/getStudent/${email01}`)
    .then(result => {
      setStu(result.data);
      console.log(stu);
    })
    .catch(error => console.log(error));
    
  }, []);*/


const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('http://localhost:3002/Student/register', {fname, email, cnumber})
  .then(result => console.log(result))
  .catch(err => console.log(err));
  setSelectedOption('');
  setId('');
  setFname('');
  setEmail('');
  setCnumber('');
  setPassword('');
  
};

  return (
    <div>
      <div className="h-h100 ">
        <img src={poto1} alt="poto1" className="h-h100 w-w100% " />

        <div className=" relative -mt-top bottom-20 ">

          { activeTab === 'Table' &&
          <div>
            <div>
            {
               /*stu.map((user) => {
                  return  <div className="mt-6 ml-16 w-96">
                    <li className="font-semibold text-lg bg-[#91d3eb]">ID : {user.id}</li>
                    <li className="font-semibold text-lg bg-[#91d3eb]">Name : {user.fname}</li>
                    <li className="font-semibold text-lg bg-[#91d3eb]">Email : {user.email}</li>
                    <li className="font-semibold text-lg bg-[#91d3eb]">Number : {user.cnumber}</li>
                    <br />
                  </div>
                })*/
                student && student.map((user) => (
                  <p ket={user._id} className=" bg-green-600" >{user.name} </p>
                ))
                
                       }
            </div>
            <button 
            className="ml-16 mt-20 text-5 border-none cursor-pointer bg-[#125a5ed7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl"
            onClick={() => handleTabClick('Update')}>
            Edit Details
            </button>
          </div>
           
          } 
          {
            activeTab === 'Update' && 
            <div className="flex justify-center mt-36">
                <div className=" bg-[#c0e1ed] w-64 place-content-center rounded-md">
                  <form
                    className=""
                    onSubmit={handleSubmit}>
                
                <div className="mt-1 pl-8">
                  <p className="font-bold mb-1">Full Name</p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    autoComplete="off"
                    name="fname"
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
                    name="cnumber"
                    className="border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl"
                    onChange={(e) => setCnumber(e.target.value)}
                  />
                </div>

                <div className="flex mt-4 pl-10 pb-5">
                  <button 
                    onClick={() => handleTabClick('Table')}
                    className="text-5 border-none cursor-pointer bg-[#125a5ed7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl">
                    Update
                  </button>
                </div>
              </form>
                  
                </div>
            </div>
           
          }
          
        </div>
      </div>
    </div>
  );
}

export default S_CeditProfile;
