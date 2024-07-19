import React, { useState } from 'react'
export default function Navbar({ search, setSearch }) {
    return (
        <nav className='sm:flex block justify-between items-center'>
            <div className='sm:block flex justify-between items-center'>
                <h4 className="text-[18px] font-medium text-gray-600">
                    {new Date().toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })}
                </h4>
                <h4 className="text-[20px] font-semibold">Flavoro Foods</h4>
            </div>
            <div className='border rounded-lg sm:m-0 mt-3 overflow-hidden border-gray-400'>
                <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} className='px-4 py-2  outline-none w-full' type="text" placeholder='Search Here.....!' />
            </div>
        </nav>
    )
}
