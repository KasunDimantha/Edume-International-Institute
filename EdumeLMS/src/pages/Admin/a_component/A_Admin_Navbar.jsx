import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const A_Admin_Navbar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/a_dashbord",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/a_dashbord/a_loadallstudentPage",
            name:"Student",
            icon:<FaUserAlt/>
        },
        {
            path:"/a_dashbord/a_loadallteacherPage",
            name:"Lecturer",
            icon:<FaRegChartBar/>
        },
        {
            path:"/a_dashbord/a_loadallcoursePage",
            name:"Courses",
            icon:<FaCommentAlt/>
        },
        {
            path:"/a_dashbord/a_loadalladminPage",
            name:"Admins",
            icon:<FaUserAlt/>
        }
        
    ]
    return (

        
        <div className="h-screen relative">
            
           <div div style={{ width: isOpen ? "250px" : "80px" }} className="sidebar bg-gray-900 p-4 text-gray-300 h-screen">
               <div className="top_section flex items-center py-3">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo text-xl p-3">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars flex text-lg ">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link flex p-3 gap-4 rounded hover:bg-gray-700 hover:text-gray-200 " activeclassName="active ">
                           <div className="icon pt-1 text-lg hover:w-2">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text text-lg border-b border-gray-700">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
          {/* <main>{children}</main> */}
        </div>
    );
};

export default A_Admin_Navbar;
