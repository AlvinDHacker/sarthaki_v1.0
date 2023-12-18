import Ad_AddUser from '@/components/Ad_AddUser'
import NavHead from '@/components/NavHead'
import React from 'react'

function page() {
  return (
    <div>
        <NavHead/>
        <div className="md:mx-6 mx-3 mt-2">
        <Ad_AddUser/>

        </div>
    </div>
  )
}

export default page