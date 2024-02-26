import React, { Component } from 'react'

function Courses() {

    const Data = [
        {
          id:1,
          
          title:'Software Engineer',
          time:'Now',
          location:'Canada',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          company:'Oscar POS'
      
        }
       
    ]
 
    return (

        <>
        <div className="min-h-screen">
            <div className="bg-gray-300 p-3">
            <h1 className="font-semibold text-2xl">Courses</h1>
            </div>
       


        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10' >

        {
            Data.map(({id,image,title,time,location,desc,company}) => {
            return(
            
                <div key={id} className='group group/item singleJob w-[250px] p-[15px] rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:bg-[#3260b5e5] '>

                <span className='flex justify-between items-center gap-4 '>
                    <h1 className='text-[14px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                    <span> {time}</span>
                </span>

                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
                </p>

                <div className='company flex items-center gap-2'>
                    
                    <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{company}</span>
                </div>

                <button className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor
                group-hover/item:text-textColor group-hover:text-black'>Apply now</button>

                </div>
        

            )
            })
        }

        
        </div>
        </div>
        </>

    )
  
}

export default Courses;
