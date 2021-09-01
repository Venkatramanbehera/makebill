import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import customerReducer from "../reducers/customersReducer"
import userReducers from "../reducers/userReducer"
// import selectCustomerReducer from '../reducers/selectCustomerReducer'

const configureStore = () => {
    const store = createStore( combineReducers({
        userDetails : userReducers,
        customers : customerReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore