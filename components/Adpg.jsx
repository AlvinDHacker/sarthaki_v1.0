import React from 'react'
import { PlusIcon } from "lucide-react";

const Adpg = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className="pt-10 text-2xl">Welcome to Admin Controls</h1>
      <div className='flex flex-wrap justify-center items-center py-5 gap-4'>
        <a href='/admin/add_user'><div className='w-40 flex gap-2 items-center justify-center bg-blue-600 p-4 text-white'>
          <PlusIcon className='w-6 h-6 font-extrabold' />
          User
        </div></a>
        <a href='/admin/add_employee'><div className='w-40 flex gap-2 items-center justify-center bg-blue-600 p-4 text-white'>
          <PlusIcon className='w-6 h-6 font-extrabold' />
          Employee
        </div></a>
        <a href='/admin/add_company'><div className='w-40 flex gap-2 items-center justify-center bg-blue-600 p-4 text-white'>
          <PlusIcon className='w-6 h-6 font-extrabold' />
          Company
        </div></a>
      </div>
    </div>
  )
}

export default Adpg