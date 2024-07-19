import { configureStore } from "@reduxjs/toolkit";
import FoodSlices from "../Slices/FoodSlices";

export const store = configureStore(
    {
        reducer: {
            foodKey: FoodSlices
        }
    }
)