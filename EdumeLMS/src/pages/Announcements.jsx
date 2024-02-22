// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Announcements() {

//   const [activeTab, setActiveTab] = useState('tab1');

//   const handleTabClick = (tabKey) => {
//     setActiveTab(tabKey);
//   };
  
//     return (
//       <div className="min-h-screen">
//         <div className="bg-gray-300 p-4">
//         <h1 className="font-semibold text-3xl">Notices</h1>
//         </div>
        
//         <div className="p-3">
//         <nav>
//           <div class="nav nav-tabs" id="nav-tab" role="tablist">
//             <button onClick={() => handleTabClick('tab1')} class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Announcements</button>
//             <button onClick={() => handleTabClick('tab2')} class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Updates</button>
//             <button onClick={() => handleTabClick('tab3')} class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Deadlines</button>
           
//           </div>
//         </nav>
//         <div class="tab-content" id="nav-tabContent">

//          {activeTab === 'tab1' &&
//           <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
//           <div class="grid grid-cols-1 divide-y p-8">
//             <div>01</div>
//             <div>02</div>
//             <div>03</div>
//           </div>
//           </div>
//         }

//         {activeTab === 'tab2' &&
//           <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><h1>hgshg</h1></div>
//         }

//         {activeTab === 'tab3' &&
//           <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">tfy.</div>
//         }   
          
//         </div>
//         </div>


//       </div>
//     )
  
// }

// export default Announcements;


import React, { useState } from 'react';

function Announcements ()  {

  const [activeTab, setActiveTab] = useState('tab1');
  // tab pane handle click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container  min-h-screen ">

      <div className="bg-gray-300 p-3 my-2">
        <h1 className="font-semibold text-3xl">Notices</h1>
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
  );
};

export default Announcements;
