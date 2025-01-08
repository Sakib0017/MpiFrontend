import React, { useState } from "react";
import { Link } from "react-router-dom";
import mpi from "../assets/mpi.png";

import Nav from "../components/Nav"
import Select from 'react-select';
const Setting = () => {// Toggle for submenu
  const [selected, setSelected] = useState("");
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
          <button  className=" font-bold ">logout</button>
        </div>

        {/* Content Area */}
        
        <div className="flex-1 p-4 bg-gray-200">
            <div className="bg-purple-900 max-w-7xl p-5 rounded mx-auto">
                <div className="grid md:grid-cols-3  gap-5 max-w-7xl">
                    
                    <div className='col-span-1  gap-5 '>
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Type</label>
              

<div class="flex mb-3 items-center ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ms-2 text-sm font-medium text-white dark:text-gray-300">Credit</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" class="ms-2 text-sm font-medium text-white dark:text-gray-300">Debit</label>
</div>


            </div>
                    
                    <div className="col-span-1">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Account Head</label>
                    <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Water Bill" required />
        </div>
                    </div>
                    
                    <div className="col-span-1 ">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Action</label>
                    <button className='bg-green-700 w-[60px] rounded m-1 text-white p-1'
                    >
                      Save
                    </button>
                      <button className='bg-blue-700 m-1 w-[60px] text-white p-1 rounded'>Edit</button>
                    
                    <button className='bg-red-700 rounded m-1 w-[60px]  text-white p-1'
                    >
                      Delete
                    </button>
                    
                    </div>
                </div>

            </div>
        
            <div className="bg-purple-900 max-w-7xl mt-10 p-5 rounded mx-auto">
                <div className="grid md:grid-cols-2  gap-5 max-w-7xl">
                    
                    
                    
                    <div className="col-span-1">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Payment</label>
                    <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Water Bill" required />
        </div>
                    </div>
                    
                    <div className="col-span-1 ">
                    <label className='block mb-2 mt-2 text-sm font-medium text-white dark:text-white'>Action</label>
                    <button className='bg-green-700 w-[60px] rounded m-1 text-white p-1'
                    >
                      Save
                    </button>
                      <button className='bg-blue-700 m-1 w-[60px] text-white p-1 rounded'>Edit</button>
                    
                    <button className='bg-red-700 rounded m-1 w-[60px]  text-white p-1'
                    >
                      Delete
                    </button>
                    
                    </div>
                </div>

            </div>
      
        </div>
      </div>
    </div>
  );
};

export default Setting;
