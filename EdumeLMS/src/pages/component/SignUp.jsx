import React from 'react'
import signupimg from './img/photo02.avif'

function SignUp() {
  return (
    <div className='h-h100 text-center'>
      <img src={signupimg} alt="signinimg" className='h-h100 w-w100%'/>

      <div className="flex justify-center absolute w-w100% text-center pl-5 pr-5 top-32 ">
          <div className="text-start font-sans rounded-xl bg-[#ffffff5e] w-w450 h-h500 m-5">
            <h2 className='mt-8 pl-16 font-bold text-xl'>Create An Account</h2>

            <div className="mt-4 pl-16">
            <p className='font-bold mb-1'>Full Name</p>
            <input type="text"  placeholder='Full Name' className='border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl'/>
          </div>

          <div className="mt-1 pl-16">
            <p className='font-bold mb-1'>Email</p>
            <input type="text"  placeholder='Email' className='border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl'/>
          </div>

          <div className="mt-1 pl-16">
            <p className='font-bold mb-1'>Contact No</p>
            <input type="text"  placeholder='Contact No' className='border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl'/>
          </div>

          <div className="mt-1 pl-16">
            <p className='font-bold mb-1'>Password</p>
            <input type="text"  placeholder='password' className='border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl'/>
          </div>

          <div className="mt-1 pl-16">
            <p className='font-bold mb-1'>Conform password</p>
            <input type="text"  placeholder='Conform' className='border-non outline-none pt-1 pb-1 pl-2 pr-2 font-sans text-1xl'/>
          </div>

          <div className='flex pl-16 mt-1'>
            <div className='flex pr-3'>
              <input type="checkbox" name="Admin" id="" />
              <p>Admin</p>
            </div>
            <div className='flex  pr-3'>
              <input type="checkbox" name="Teacher" id="" />
              <p>Teacher</p>
            </div>
            <div className='flex pr-3'>
              <input type="checkbox" name="Student" id="" />
              <p>Student</p>
            </div>
          </div>

          <div className='flex justify-center mt-6'>
            <button className='text-5 border-none cursor-pointer bg-[#a83030d7] text-white pt-2 pb-2 pl-16 pr-16 rounded-xl'>Sign In</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp
