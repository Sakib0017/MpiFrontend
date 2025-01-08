import React, { useState } from "react";
import { Link } from "react-router-dom";
import mpi from "../assets/mpi.png";

import Nav from "../components/Nav"
import Select from 'react-select';
const Setting = () => {// Toggle for submenu

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={` bg-purple-900 text-white h-screen text-[14px] w-60 transition-width duration-300`}
      >
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Navbar */}
        <div className="bg-purple-900 text-white px-4 py-2 flex justify-end items-center ">
          <button>logout</button>
        </div>

        {/* Content Area */}
        
        <div className="flex-1 p-4 bg-gray-200">
            <div className="bg-purple-900 max-w-7xl p-5 rounded mx-auto">
                <div className="grid md:grid-cols-5  gap-5 max-w-7xl">
                    
                    <div className='col-span-2 '>
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Type</label>
              

<div class="flex items-center">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-white dark:text-gray-300">Credit</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" class="ms-2 text-sm font-medium text-white dark:text-gray-300">Debit</label>
</div>


            </div>
                    
                    <div className="col-span-2">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Head</label>
                    <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
                    </div>
                    
                    <div className="col-span-1">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Action</label>
                    <svg className="w-[30px] h-[30px] fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>

</svg>
                    </div>
                </div>

            </div>
        
      
      
        </div>
      </div>
    </div>
  );
};

export default Setting;
