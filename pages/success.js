import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill, bsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '@/context/StateContext'
import { schoolFires } from '../lib/utils'
const success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();

    useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0)
    schoolFires()
    }, [])
    

  return (
    <div className='success-wrapper'>
      <div className='success'>
     <p className='icon'>
        <BsBagCheckFill/>
     </p>
     <h2>Thank you for your purchase!</h2>
     <p className='email-msg'> Check your email inbox for the receipt </p>
     <p className='description'>
        If you have any queries ,please Email us
        <a className='email' href="mailto:abdullahbeast1327@gmail.com">
        abdullahbeast1327@gmail.com
     </a>
     </p>
     <Link href='/'>
      <button type='button' className='btn' width="300px">
     Continue Shopping !
      </button>
     </Link>
      </div>
    </div>
  )
}

export default success