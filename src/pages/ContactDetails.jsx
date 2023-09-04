import React, { useEffect, useState } from 'react'
import { getContactDetails, getProfilePic } from '../api/contact'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState({});
    const [ profilePic, setProfilePic ] = useState('');
    const { name, email, username, phone, address = {}, company = {}} = userDetails
    useEffect(() => {
        getContactDetails(id).then((res) => {
            setUserDetails(res)

            const [userFname, userLname] = res.name.split(' ')
            getProfilePic( userFname?.[0]+userLname?.[0]).then((res) => {
              setProfilePic(res.url)
            })
        })
    }, [])

    return (
        <div className='flex gap-4'>
            <div>
                <img className='w-32 mr-6' src={profilePic} />
            </div>

            <div>
                <div className='flex flex-col gap-1'>
                    <label>Name :</label>
                    <input className='bg-gray-300 px-4 py-2 rounded-md' value={name} />
                </div>

                <div className='flex flex-col gap-1 my-3'>
                    <label>Email :</label>
                    <input  className='bg-gray-300 px-4 py-2 rounded-md'  value={email} />
                </div>

                <div className='flex flex-col gap-1 my-3'>
                    <label>Username :</label>
                    <input className='bg-gray-300 px-4 py-2 rounded-md'  value={ username } />
                </div>

                <div className='flex flex-col gap-1'>
                    <label>Address :</label>
                    <textarea  className='bg-gray-300 px-4 py-2 rounded-md'  value={`${address?.street}, ${address.city}`} />
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-1'>
                    <label>Company :</label>
                    <input  className='bg-gray-300 px-4 py-2 rounded-md'  value={company.name} />
                </div>
                <div className='flex flex-col gap-1 my-3'>
                    <label>Industry :</label>
                    <input  className='bg-gray-300 px-4 py-2 rounded-md'  value={company.bs} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Catch Phrase :</label>
                    <textarea className='bg-gray-300 px-4 py-2 rounded-md'  value={company.catchPhrase} />
                </div>
                <div className='mt-4 flex justify-end items-end'>
                    <button className='ml-auto'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails