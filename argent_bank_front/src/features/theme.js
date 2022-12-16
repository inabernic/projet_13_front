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