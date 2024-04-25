import { combineReducers, configureStore } from '@reduxjs/toolkit'
import vitalInfo, { vitalInfoState } from "./vitalInfo";


const combinedReducer = combineReducers({
    vitalInfo:vitalInfo
})

const store = configureStore({
    reducer: combinedReducer
})
export default store
export interface IRootState {
    vitalInfo:vitalInfoState
}


