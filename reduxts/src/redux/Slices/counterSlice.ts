import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType{
    value:number
  }

  const initialState: StateType = { value: 0 }

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})


export const {increment, decrement, incrementByValue} = counterSlice.actions

export default counterSlice.reducer