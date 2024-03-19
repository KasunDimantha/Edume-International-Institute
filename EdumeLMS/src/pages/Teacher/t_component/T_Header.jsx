import React from "react"
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

function T_Header() {
    const {logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

  return (
    <div>
      <div className="flex justify-between items-center bg-[#77764a] pt-4 pr-20 pb-3 pl-20">
                <div className="font-sans text-white">
                    <Link to="/"><h3 className="text-2xl">Edume International Institute</h3></Link>
                </div>
                <div className="flex relative">
                    
                    <input type="text" placeholder="search here.." className="h-h29 w-w250 outline-none rounded-2xl pl-4 border-none font-sans"/>
                    <button className="w-w29 h-h29 rounded-2xl relative border-none bg-white -left-7 hover:bg-gray-300 active:bg-gray-200 pl-1"><FaSearch/></button>
                </div>
                <div className="items-center">
                    <div>
                        <a className="flex justify-center text-base"><VscAccount/></a>
                    </div>
                    {user && (
                        <span>{user.name}</span>
                    )}

                    <div className="font-sans text-white">
                        <div>
                        <Link to="/signInPage">
                            <button onClick={handleClick} className='cursor-pointer pl-1'>LogOut</button>
                        </Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex justify-end relative h-0 -bottom-6">
                    <li className="mr-16 text-base cursor-pointer text-white "><a>Home</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>Programs</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>Support</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>About Us</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>Contact Us</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>My Courses</a></li>
                    <li className="mr-16 text-base cursor-pointer text-white "><a>Student Manuals</a></li>
                </ul>
            </div>
    </div>
  )
}

export default T_Header