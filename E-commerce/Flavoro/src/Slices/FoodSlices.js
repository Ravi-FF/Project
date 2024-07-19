import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../FoodData";

const foodSlice = createSlice({
    name: "Food",
    initialState: { AllFoodData: FoodData, filterData: FoodData, addCard: [] },
    reducers: {
        filterByCategory: (state, action) => {
            state.filterData = state.AllFoodData.filter((item) => {
                if (action.payload === "all") {
                    return state.AllFoodData
                } else {
                    return item.category.toLowerCase().includes(action.payload)
                }
            }
            )
        },
        addToCard: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.addCard.find((item) => item.id === id);
            if (existingItem) {
                state.addCard = state.addCard.map((item) => item.id === id ? {
                    ...item, quantity: item.quantity + 1,
                    price: item.price + state.AllFoodData[id].price
                } : item)
            } else {
                state.addCard.push({ ...state.AllFoodData[id], ...action.payload, quantity: 1, price: state.AllFoodData[id].price });
            }
        },
        incrementItems: (state, action) => {
            const existingItem = state.addCard.find((item) => item.id == action.payload)
            if (existingItem) {
                state.addCard = state.addCard.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1, price: item.price + item.price / item.quantity } : item)
            }
        },
        decrementItems: (state, action) => {
            const existingItem = state.addCard.find((item) => item.id === action.payload)
            if (existingItem && existingItem.quantity > 1) {
                state.addCard = state.addCard.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1, price: item.price - item.price / item.quantity } : item)
            } else if (existingItem && existingItem.quantity === 1) {
                state.addCard = state.addCard.filter((item) => item.id !== action.payload)
            }
        },
        deleteItem: (state, action) => {
            state.addCard = state.addCard.filter((item) => item.id !== action.payload)
        }
    }
})

export default foodSlice.reducer
export const { filterByCategory, addToCard, incrementItems, decrementItems, deleteItem } = foodSlice.actions