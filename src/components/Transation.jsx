import React, { useState } from "react";
import { Link } from "react-router-dom";
import mpi from "../assets/mpi.png";
import Select from 'react-select';
import Nav from "../components/Nav"
const Navbar = () => {// Toggle for submenu

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
            
        
      <div className='mx-auto max-w-7xl mt-10 bg-gray-100 shadow rounded'>
        <div className="bg-blue-500 p-2">
            <h1 className="text-white font-bold text-center">Transation</h1>
        </div>
        <form >
          <div className='grid md:grid-cols-6 p-5 gap-5'>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Accounts Type</label>
              <Select
                
                placeholder='Account Type'
                isSearchable
                className='w-full'
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Accounts Head</label>
              <Select
               
                placeholder='Account Head'
                isSearchable
                className='w-full'
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Amount</label>
              <input
                type='number'
                
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Amount'
                required
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Payment Method</label>
              <Select
               
                placeholder='Payment Method'
                isSearchable
                className='w-full'
              />
            </div>
            <div className='col-span-1'>
              <label className='block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white'>Status</label>
              <input
                type='date'
               
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Status'
                required
              />
            </div>
            <div className='col-span-1'>


<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


            </div>
            <div className='col-span-5 '>



            
            </div>
            <div className='col-span-1 '>



              <button
                type='submit'
                className='bg-gray-50  ms-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
               
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-5 overflow-auto">
      <div className='relative max-w-7xl col-span-1 mt-10 mb-20 mx-auto overflow-x-auto'>
        
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-white uppercase bg-red-500 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Account Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Account Head
              </th>
              <th scope='col' className='px-6 py-3'>
                Amount
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
           
              
                <tr  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4 gap-2'>
                    <Link >
                      <button className='bg-blue-700 m-1 text-white p-1 rounded'>Edit</button>
                    </Link>
                    <button
                     
                      className='bg-red-700 rounded m-1 text-white p-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  No credit accounts available
                </td>
              </tr>
           
          </tbody>
          <tfoot className='bg-gray-100 dark:bg-gray-700'>
      <tr>
        <td colSpan='4' className='px-6 py-4 font-bold'>Total Credit</td>
        <td colSpan='1' className='px-6 py-4 font-bold'></td>
      </tr>
    </tfoot>
        </table>
      </div>

      {/* Debit Accounts Table */}
      <div className='relative max-w-7xl col-span-1 mt-10 mb-20 mx-auto overflow-x-auto'>
        
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Account Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Account Head
              </th>
              <th scope='col' className='px-6 py-3'>
                Amount
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
           
             
            
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4 gap-2'>
                    <Link >
                      <button className='bg-blue-700 text-white m-1 p-1 rounded'>Edit</button>
                    </Link>
                    <button
                      
                      className='bg-red-700 rounded text-white m-1 p-1'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
             
              <tr>
                <td colSpan='5' className='text-center px-6 py-4'>
                  No debit accounts available
                </td>
              </tr>
           
          </tbody>
          <tfoot className='bg-gray-100 dark:bg-gray-700'>
      <tr>
        <td colSpan='4' className='px-6 py-4 font-bold'>Total Credit</td>
        <td colSpan='1' className='px-6 py-4 font-bold'></td>
      </tr>
    </tfoot>
        </table>
      </div>
     
      <div className='max-w-7xl mx-auto gap-5 flex justify-between'>
      
     
     
    </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
