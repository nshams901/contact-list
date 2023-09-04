import React, { useEffect, useState } from 'react'
import { getContactList } from '../api/contact'
import ContactListItem from '../components/ContactListItem'

const ContactList = () => {
    const [ state, setState] = useState({
        list: []
    })
    const { data = [], list = [], loading} = state
    useEffect(() => {
        setState({...state, loading: true})
        getContactList().then(( res ) => {
            setState({...state, data: res, list: res, loading: false })
        })
    }, []);

    const handleSearch = (e) => {
        const { value } = e.target;
        const name = value.toLowerCase();
        const filtered = data.filter((item) => {
            return item.name.toLowerCase().includes(name)
        })
        setState({ ...state, list: filtered})
    }
  return (
    <>
    <div className='border-b-2 flex justify-between items-center border-blue-500'>
        <p className=' font-semibold text-xl py-3'>codingskils <span className=' text-blue-500'>play</span></p>
        <label> Search :
            <input placeholder='Search your contact' onChange={ handleSearch } className=' border border-black rounded-md ml-2 p-2 focus:outline-none'/>
        </label>
    </div>
    {
        loading && 
        <div className='flex justify-center text-2xl mt-24 font-bold'>Lodaing...</div>
    }
    <div className='md:flex flex-wrap'>
     {
        list.map((item) => {
            return (
                <ContactListItem data={ item }/>
            )
        })
     }
    </div>
    </>
  )
}

export default ContactList