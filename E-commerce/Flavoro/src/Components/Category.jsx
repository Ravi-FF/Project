import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../Slices/FoodSlices';

export default function Category() {
    const Fetchcategories = useSelector((state) => state.foodKey.AllFoodData);
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("all");

    const dispatch = useDispatch()
    const handleData = (e) => {
        setCategoryName(e.target.innerText.toLowerCase())
        dispatch(filterByCategory(e.target.innerText.toLowerCase()))
    }
    useEffect(() => {
        const uniqueCategories = [];
        Fetchcategories.forEach((item) => {
            if (!uniqueCategories.includes(item.category)) {
                uniqueCategories.push(item.category);
            }
        });
        setCategories(["All", ...uniqueCategories]);
    }, [Fetchcategories]);

    return (
        <div className='my-6'>
            <h3 className='text-[20px] font-semibold'>Find the best food</h3>
            {categories.map((item, i) => (
                <button key={i} className={`py-1 px-4 me-3 mt-2 font-medium text-[14px] rounded-md ${item.toLowerCase() === categoryName ? "bg-green-600" : "bg-gray-300"}`} onClick={handleData}>{item}</button>
            ))}
        </div>
    );
}
