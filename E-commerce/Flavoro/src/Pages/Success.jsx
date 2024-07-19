import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <div className='flex text-center h-screen justify-center items-center'>
            <div>
                <h1 className='font-semibold text-2xl mb-4'>Order Successful...!</h1>
                <p className='my-2'>Your order has been successfully placed</p>
                <Link to={"/"}>
                    <button className='bg-green-500 py-1 px-3 rounded-md text-white'>More Order</button>
                </Link>
            </div>
        </div>
    )
}
