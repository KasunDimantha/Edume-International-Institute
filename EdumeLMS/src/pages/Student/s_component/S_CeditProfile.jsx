import React from "react";
import poto1 from "./s_img/hand.jpg";

function S_CeditProfile() {
  return (
    <div>
      <div className="h-h100 ">
        <img src={poto1} alt="poto1" className="h-h100 w-w100% " />

        <div className=" relative -mt-top bottom-20">
          <table>
            <thead>
              <th>
                <tr>Name</tr>
                <tr>Email</tr>
                <tr>age</tr>
                <tr>action</tr>
              </th>
              <th>
                <tr>dimantha</tr>
                <tr>kasun@gmail.com</tr>
                <tr>26</tr>
                <tr>update</tr>
              </th>
            </thead>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default S_CeditProfile;
