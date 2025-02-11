import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    value: {},
}

export const selecteduserSlice = createSlice({
    name: 'selecteduser',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = selecteduserSlice.actions

export default selecteduserSlice.reducer