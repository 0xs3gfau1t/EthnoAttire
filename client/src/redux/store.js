import { configureStore } from '@reduxjs/toolkit'

import detection from './reducers/detection'

export default configureStore({
    reducer: {
        detection,
    },
})
