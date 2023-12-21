import Ad_AddEmpl from '@/components/Ad_AddEmpl'
import NavHead from '@/components/NavHead'
import React from 'react'

function page() {
  return (
    <div>
        <NavHead/>
        <div className="md:mx-6 mx-3 mt-2">
        <Ad_AddEmpl/>

        </div>
    </div>
  )
}

export default page