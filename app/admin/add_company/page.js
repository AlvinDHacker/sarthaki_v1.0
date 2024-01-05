import Ad_AddComp from '@/components/Ad_AddComp'
import NavHead from '@/components/NavHead'
import React from 'react'

function page() {
  return (
    <div>
        <NavHead/>
        <div className="md:mx-6 mx-3 mt-2">
        <Ad_AddComp/>

        </div>
    </div>
  )
}

export default page