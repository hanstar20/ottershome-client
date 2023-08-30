import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const toggleSlice = createSlice({
  name: 'menuToggle',
  initialState,
  reducers: {
    menuToggle: state => {
      state.value = state.value === false ? true : false
    },
  },
})

export const { menuToggle } = toggleSlice.actions

export default toggleSlice.reducer
