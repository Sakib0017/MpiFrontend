import React, { useState } from "react";
import { Link } from "react-router-dom";
import mpi from "../assets/mpi.png";

import Nav from "../components/Nav"
import Select from 'react-select';
const Report = () => {// Toggle for submenu

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={` bg-purple-900 text-white h-screen text-[14px] w-60 transition-width duration-300`}
      >
          <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1  flex flex-col ">
        {/* Navbar */}
        <div className="bg-purple-900 text-white px-4 py-2 flex justify-end items-center ">
          <button  className=" font-bold ">logout</button>
        </div>

        {/* Content Area */}
        
        <div className="flex-1  p-4 bg-gray-200">
            <div className="mx-auto max-w-7xl mt-10 bg-purple-900 shadow ">
                <div className="grid md:grid-cols-9 p-5 gap-5 max-w-7xl">
                    
                    <div className='col-span-2'>
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Type</label>
              <Select
               
                placeholder='Account Head'
                isSearchable
                className='w-full'
              />
            </div>
                    
                    <div className="col-span-2">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Head</label>
                    <Select
               
               placeholder='Account Head'
               isSearchable
               className='w-full'
             />
                    </div>
                    
                    <div className='col-span-2'>
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>From </label>
              <input
                type='date'
               
                className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Status'
                required
              />
            </div>
            
            <div className='col-span-2'>
            <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>To</label>
              <input
                type='date'
               
                className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Status'
                required
              />
            </div>
            <div className='col-span-1 gap-10 flex items-center justify-center mt-7'>
            
            <svg className="w-[30px] h-[30px]  fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>

</svg>
<svg className="w-[30px] h-[30px] fill-white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>

</svg>
            </div>
                </div>

            </div>
        
      
      
        </div>
      </div>
    </div>
  );
};

export default Report;
