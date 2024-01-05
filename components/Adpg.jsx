import React from 'react'

const Adpg = () => {
  return (
    <div>
        <h1 className="pt-10 text-2xl">Welcome to Admin Controls</h1>
        <div className='py-5 gap-4'>
          <div>
            <a href='/admin/add_user'>Add Users</a>
          </div>
          <div>
            <a href='/admin/add_employee'>Add Employee</a>
          </div>
          <div>
            <a href='/admin/add_company'>Add Company</a>
          </div>
        </div>
    </div>
  )
}

export default Adpg