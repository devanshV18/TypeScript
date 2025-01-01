import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:StateType = {
    loading: false,
    result: [],
    words: []
}

const rootSlice = createSlice({
    name: "root",
    initialState: initialState,
    reducers: {
        getWordsRequest: (state) => {
            state.loading = true
        },
        getWordsSuccess: (state,action:PayloadAction<WordType[]>) => { //defined the type of payload so the state throws no error if the accessed state has same type as incoming payload
            state.loading = false
            state.words = action.payload
        },
        getWordsFail: (state, action:PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        saveResult: (state, action: PayloadAction<string[]>) => {
            state.loading = false
            state.result = action.payload
        },
        clearState: (state) => {
            state.loading = false
            state.result = []
            state.words = []
            state.error = undefined
        }
    }
})

export const {getWordsRequest, getWordsSuccess, getWordsFail, saveResult, clearState} = rootSlice.actions

export default rootSlice.reducer