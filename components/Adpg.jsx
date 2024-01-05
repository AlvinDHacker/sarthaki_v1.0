import React from 'react'
import { PlusIcon } from "lucide-react";

const Adpg = () => {
  return (
    <div>
        <h1 className="pt-10 text-2xl">Welcome to Admin Controls</h1>
        <div className='py-5 gap-4'>
          <div className='flex gap-2 items-center justify-center bg-blue-500 p-5'>
            <PlusIcon className='w-6 h-6' />
            <a href='/admin/add_user'>User</a>
          </div>
          <div className='flex gap-2 items-center justify-center bg-blue-500 p-5'>
            <PlusIcon className='w-6 h-6' />
            <a href='/admin/add_employee'>Employee</a>
          </div>
          <div className='flex gap-2 items-center justify-center bg-blue-500 p-5'>
            <PlusIcon className='w-6 h-6' />
            <a href='/admin/add_company'>Company</a>
          </div>
        </div>
    </div>
  )
}

export default Adpg