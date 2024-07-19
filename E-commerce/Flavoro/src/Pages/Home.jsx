import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import Card from '../Components/Card'
import { useSelector } from 'react-redux'
import HiddenItems from '../Components/HiddenItems'

export default function Home() {
    const FetchFoodData = useSelector((state) => state.foodKey.addCard)
    const itemsQuantity = FetchFoodData.reduce((acc, curr) => acc + curr.quantity, 0,)
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)
    const handleHide = (e) => {
        if (e.target.classList.contains("hide")) {
            setShow(false)
        }
    }
    return (
        <>
            <Navbar search={search} setSearch={setSearch}></Navbar>
            <Category></Category>
            <Card search={search}></Card>
            <div className={`bg-white  ${itemsQuantity != 0 && "animation"} fixed z-10 right-10 bottom-8 cursor-pointer text-2xl p-1 rounded-md shadow-lg border border-1 border-black`} onClick={() => setShow(itemsQuantity !== 0 && true)}>
                <div className='relative'>
                    🛒
                    <span className="absolute -right-4 -top-5 h-5 w-5 text-center leading-5 rounded-full text-[13px] font-semibold text-white bg-green-500">{itemsQuantity}</span>
                </div>
            </div>
            <div className={`${show ? "translate-x-0" : "translate-x-full"} hide bg-[rgba(0,0,0,0.5)] transition duration-500 ease-in-out z-20 flex justify-end fixed inset-0`} onClick={handleHide}>
                <HiddenItems setShow={setShow} ></HiddenItems>
            </div>
        </>
    )
}
