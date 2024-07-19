import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementItems, deleteItem, incrementItems } from '../Slices/FoodSlices'

export default function HiddenItems({ setShow }) {
    const FetchFoodData = useSelector((state) => state.foodKey.addCard)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSuccess = () => {
        console.log(FetchFoodData);
        if (FetchFoodData.length == 0) {
            alert("Please Order Something.....!")
        } else {
            navigate("Success")
        }
    }
    return (
        <div className='w-1/4 bg-white h-screen p-3 flex flex-col justify-between'>
            <div className='overflow-y-auto scrollbar' id='style-2'>
                <div className='flex justify-between pb-2 border-b  border-gray-300'>
                    <h1 className='text-2xl font-semibold'>My Order</h1>
                    <span className='cursor-pointer' onClick={() => setShow(false)}>
                        ❌
                    </span>
                </div>
                {FetchFoodData.map((item) =>
                    <div key={item.id} className='flex relative justify-start  px-5 my-3 py-3 gap-7 border border-1 border-gray-300 mx-auto rounded-md shadow-md w-full'>
                        <img src={item.img} alt="" width="60px" />
                        <div>
                            <h1 className='text-gray-600 mb-2 text-ellipsis overflow-hidden whitespace-nowrap'>{item.name}</h1>
                            <button className='bg-green-600 h-[30px] w-[30px] rounded-md text-white shadow-md' onClick={() => dispatch(decrementItems(item.id))}>-</button>
                            <span className='mx-3' >{item.quantity}</span>
                            <button className='bg-green-600 h-[30px] w-[30px] rounded-md text-white shadow-md' onClick={() => dispatch(incrementItems(item.id))}>+</button><span className='text-green-700 ms-5 font-semibold'>₹ {item.price}</span>
                            <h6 onClick={() => dispatch(deleteItem(item.id))} className='cursor-pointer absolute  right-4 bottom-2 text-[25px]' title='Delete Item'>
                                ✘
                            </h6>
                        </div>
                    </div>)}
            </div>
            <div>
                <div className='py-4  border-t  border-gray-300'>
                    <div className="align-baseline  font-semibold">Total Items -  <span className=' text-green-600'>{FetchFoodData.reduce((acc, curr) => acc + curr.quantity, 0,)}</span> </div>
                    <div className="align-baseline  font-semibold">Total Amount -  <span className=' text-green-600'>₹ {FetchFoodData.reduce((acc, curr) => acc + curr.price, 0,)}</span> </div>
                </div>
                <button className='bg-green-600 w-full py-2 text-white rounded-md' onClick={handleSuccess}>Checkout</button>
            </div>
        </div>

    )
}
