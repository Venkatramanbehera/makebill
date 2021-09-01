import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import customerReducer from "../reducers/customersReducer"
import productReducer from "../reducers/productsReducer"
import userReducers from "../reducers/userReducer"

const configureStore = () => {
    const store = createStore( combineReducers({
        userDetails : userReducers,
        customers : customerReducer,
        products : productReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore