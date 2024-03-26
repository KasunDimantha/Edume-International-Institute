import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function A_SemesterDetails({courseid}) {

    const [activeTab, setActiveTab] = useState('loadsemester');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    console.log(courseid)
  return (
    <div>
        { activeTab === 'loadsemester' && 
            <div>
                    <button 
                        onClick={() => handleTabClick('loadAllCourse')}
                        className='text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent mr-3 hover:bg-green-500 rounded-lg'>
                            back to course
                    </button>
                <h1>kasun</h1>
                <h1>{courseid}</h1>
            </div>
            
        }

        { activeTab === 'loadAllCourse' &&
            <div>
                <Link to='/a_dashbord/a_loadallcoursePage'></Link>
            </div>

        }
        
    </div>
  )
}

export default A_SemesterDetails
