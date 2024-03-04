import React, { Component } from 'react'

function Apply_Course() {
    
  
    return (
        <div className="min-h-screen">

            <div className="bg-cyan-500 p-3 text-white">
            <h1 className="font-semibold text-2xl ">
            <label className='courseLbl'><h3 class="text-slate-900 dark:text-white mt-3 font-semibold text-lg tracking-tight">Information Technology</h3></label>
            </h1>
            <h1 className="pt-2 text-md">view Course</h1>
            </div>

            <div class="bg-white flex-grow dark:bg-slate-800 rounded-lg mx-40 mt-5 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">                
                <label className='studentLbl'><h3 class="text-slate-900 dark:text-white mt-3 font-semibold text-lg tracking-tight">Course career path</h3></label>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                This programme will provide exposure to core programming concepts
                 in Python language. Participants who successfully complete will 
                 gain the skills and knowledge to become an entry level Python programmer.
                </p>
            </div>
            
            <div className="flex justify-evenly mt-16">

                {/* load registerd student data */}
                <div>
                    <h1 className='text-lg p-2'>Personal details</h1>

                    <div className='flex p-1 '>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3"  htmlFor="readOnlyInput">
                            Registration Id :
                        </label>                
                        <input type="text" readOnly value='student Id' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12 " placeholder="Name of the Student"></input>                        
                    </div>

                    <div className='flex p-1'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3" htmlFor="readOnlyInput">
                            Name :
                        </label>                
                        <input type="text" readOnly value='Name of the student' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12" placeholder="Name of the Student"></input>                        
                    </div>

                    <div className='flex p-1'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3" htmlFor="readOnlyInput">
                            e-mail :
                        </label>                
                        <input type="text" readOnly value='example@gmail.com' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12" placeholder="Name of the Student"></input>                        
                    </div>
                    
                </div>

                {/* Add Course details */}
                <div>

                <h1 className='text-lg p-2'>Course details</h1>

                    <div className='flex p-1'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3" htmlFor="readOnlyInput">
                            Course :
                        </label>                
                        <input type="text" readOnly value='Information Technology' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12" placeholder="Name of the Student"></input>                        
                    </div>

                    <div className='flex p-1'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3" htmlFor="readOnlyInput">
                            Duration :
                        </label>                
                        <input type="text" readOnly value='1 year' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12" placeholder="Name of the Student"></input>                        
                    </div>

                    <div className='flex p-1'>
                        <label className="block text-gray-700 text-sm font-bold mb-2 p-3" htmlFor="readOnlyInput">
                            Course fee :
                        </label>                
                        <input type="text" readOnly value='Rs.60 000' name="username" id="studentname" autocomplete="username" class="block flex-1 border-1 text-gray-900 placeholder:text-gray-400 pl-2 w-48 h-12" placeholder="Name of the Student"></input>                        
                    </div>
                    
                </div>   
                         
            </div>

           <div className='flex justify-center pt-2'>
           <button class="transition duration-150 ease-in-out bg-blue-600 text-white border-[3px] rounded-[10px] block p-[8px] w-48 text-[18px] font-semibold">Apply now</button>
           </div>

        </div>

    )
  
}

export default Apply_Course;
