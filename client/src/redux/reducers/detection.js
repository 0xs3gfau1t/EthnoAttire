import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image: null,
    video: null,
    caste: null,
    detected: false,
}

const detectionSlice = createSlice({
    name: 'detection',
    initialState,
    reducers: {
        addImage: (state, { payload }) => {
            state.image = payload.data
        },
        removeImage: state => {
            state.image = null
            state.detected = false
        },
    },
})

export const { addImage, removeImage } = detectionSlice.actions

export default detectionSlice.reducer
