import React, { useState } from 'react'
import poto1 from "./s_img/hand.jpg";

function S_Announcements() {

  const [activeTab, setActiveTab] = useState('tab1');
  // tab pane handle click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="h-h100">
        <img src={poto1} alt="poto1" className="h-h100 w-w100% " />

        <div className="container relative -mt-top ml-10  min-h-screen ">

          <div className="bg-gray-300 p-3 my-2">
            <h1 className="font-semibold text-2xl">Announcements</h1>
          </div>

          {/* Add tab pane */}
          <div className="flex justify-end">
            <button
              className={`mr-2 px-4 py-2 focus:outline-none ${activeTab === 'tab1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleTabClick('tab1')}
            >
              Announcements
            </button>
            <button
              className={`mr-2 px-4 py-2 focus:outline-none ${activeTab === 'tab2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleTabClick('tab2')}
            >
              Deadlines
            </button>
            <button
              className={`px-4 py-2 focus:outline-none ${activeTab === 'tab3' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => handleTabClick('tab3')}
            >
              Updates
            </button>
          </div>

          {/* Tab pane content */}
          <div className="mt-4">
            {activeTab === 'tab1' && <div className="bg-gray-100 p-4">

            {/* divide width */}
            <div class="grid grid-cols-1 divide-y">
              <div className='p-3'>01</div>
              <div className='p-3'>02</div>
              <div className='p-3'>03</div>
            </div>
            </div>}

            {activeTab === 'tab2' && <div className="bg-gray-100 p-4">Content for Tab 2</div>}
            {activeTab === 'tab3' && <div className="bg-gray-100 p-4">Content for Tab 3</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default S_Announcements
