import React, { useEffect, useState } from 'react'
import { getProfilePic } from '../api/contact'
import { Link } from 'react-router-dom'

const ContactListItem = ({ data }) => {
    const { name, username, email, company, phone, website, id} = data
    const [profilePic, setProfilePic] = useState('')
    console.log(data);
    useEffect(() => {
        const [userFname, userLname] = name.split(' ')
        getProfilePic( userFname?.[0]+userLname?.[0]).then((res) => {
          setProfilePic(res.url)
        })
    }, [])
  return (
    <div className='flex items-center gap-4 my-3 w-1/2'>

        {/* Profile picture */}
        <div>
            <img className='w-28' src={profilePic} />
        </div>

        {/* Profile details */}
        <div className='flex-1 w-1/3'>
            <div className='flex gap-3'>
              <h4>{name}</h4>
              <p>(@{username})</p>
            </div>
            <p>{ email }</p>
            <p>Company: {company.name}</p>
        </div>
        {/* Contact */}
        <div className='ml-auto w-1/3'>
          <p>Phone: {phone}</p>
          <p>Websit: {website}</p>
          <div>
            <button>
              <Link to={`/${id}`}>
              Details >
              </Link>
           </button>
          </div>
        </div>
    </div>
  )
}

export default ContactListItem