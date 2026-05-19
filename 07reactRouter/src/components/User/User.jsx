import React from 'react'
import { useParams } from 'react-router-dom'
/* useParams is used to take value form the url , it is also a hook */

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User