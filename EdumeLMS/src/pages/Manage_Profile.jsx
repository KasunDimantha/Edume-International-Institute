import React from 'react';
import Profile1 from '/src/pages/component/img/Profile1.jpg'


const Data = [
    {      
      image:'Profile1',
      StName:'Tharindu Nimsara'
    }
]

function Manage_Profiles () {

    return(

        <div className="min-h-screen bg-gray-200">

        {Data.map(({image,StName}) => {
    
            return (
            
                <>
                    <div className="bg-cyan-500 p-3 text-white">
                    <h1 className="font-semibold text-2xl ">Student Profile</h1>
                    <h1 className="pt-2 text-md">view Profile</h1>
                    </div>

                    
                    <div className="flex justify-center items-center h-screen">
                    <div className="bg-white p-2 rounded  max-w-7xl w-full h-5/6">
        
                        
                        {/* Add profile pic and name */}
                        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img class= "block  h-24 rounded-full sm:mx-0 sm:shrink-0" src={image} />
                            <div class="text-center space-y-2 sm:text-left">
                                <div class="space-y-0.5">
                                <p class="text-lg text-black font-semibold">{StName}</p>
                                
                                </div>
                            
                            </div>
                        </div>
                    

                    </div>
                    </div>

                </>

            
            )}

        )}

        </div>
    )


  
}

export default Manage_Profiles;