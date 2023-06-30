import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image: null,
    video: null,
    classes: [],
    caste: [],
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
        },
    },
})

export const { addImage, removeImage } = detectionSlice.actions

export default detectionSlice.reducer
