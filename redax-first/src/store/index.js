import { createStore } from 'redux'
import { mainReducer } from '../reducers/index'

const initialState = {
    count: 0
}

export default function configureStore () {
    return createStore(mainReducer, initialState)
}