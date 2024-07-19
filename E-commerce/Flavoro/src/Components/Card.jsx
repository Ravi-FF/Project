import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../Slices/FoodSlices';

export default function Card({ search }) {
    const FetchFoodData = useSelector((state) => state.foodKey.filterData);
    const dispatch = useDispatch()
    return (
        <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {FetchFoodData.length == 0 ? "Data is Loading.!" : FetchFoodData.filter((item) => item.name.toLowerCase().includes(search)).map(({ img, name, price, desc, id, rating }, i) => <div key={id} className='bg-white transition p-4 rounded-lg hover:scale-105 shadow-lg '>
                <div className='w-full h-[180px]'>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='flex mt-2 justify-between'>
                    <h5 className='font-semibold'>{name}</h5>
                    <h5 className='text-green-600'> ₹ {price}</h5>
                </div>

                <p className='text-gray-600 text-[14px] my-3 leading-5 text-ellipsis overflow-hidden whitespace-nowrap'>{desc}</p>

                <div className='flex justify-between'>
                    <h5 className='font-bold'>⭐  {rating}</h5>
                    <button className='py-1 px-4 font-medium text-[14px] rounded-md text-white bg-green-600' onClick={() => dispatch(addToCard({
                        id: i,
                        quantity: 0,
                    }))}>Add Card</button>
                </div>
            </div>)}

        </div>
    )
}

