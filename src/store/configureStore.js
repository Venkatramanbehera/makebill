import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import userReducers from "../reducers/userReducer"

const configureStore = () => {
    const store = createStore( combineReducers({
        userDetails : userReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore