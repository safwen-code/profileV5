import { profileReducer } from './reducers/profileReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
})

export default store
