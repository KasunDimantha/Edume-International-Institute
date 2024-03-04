import React, { Component } from 'react'

function Courses() {

    const Data = [
        {
          id:1,
          image:'/src/pages/component/img/online-learning.png',
          title:'Information Technology',
          company:'Edume Institute'      
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
            Data.map(({id,image,title,company}) => {
            return(
            
                <div key={id} className='group group/item singleJob w-[250px] p-[15px] rounded-[10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:bg-[#3260b5e5] '>


                <div className='company flex justify-center gap-2 w-full'>
                  <img src={image} alt='' className='w-[18%]'/>
                
                </div>
                
                <p className='text-md font-bold  pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {title}
                </p>

                <div className='company flex items-center gap-2'>
               
                    <span className='text-[14px] py-[1rem] block  group-hover:text-white'>{company}</span>
                </div>

                <button onClick={() => (window.location.pathname = "/apply_course")} className=' border-[3px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-white text-textColor
                group-hover/item:text-textColor group-hover:text-black'>more details...</button>

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
