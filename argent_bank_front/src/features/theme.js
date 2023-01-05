//A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state) => {
            return state === "light" ? 'dark' : "light"
        },
        set: (state, action) => {
            return action.playload
        },
    },
})

export const { set, toggle } = actions
export default reducer