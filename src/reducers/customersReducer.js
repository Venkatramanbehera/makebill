const initialState = []

const customerReducer = (state=initialState,action) => {
    switch(action.type){
        case 'GET_CUSTOMER':{
            return [ 
                ...state,...action.payload 
            ]
        }
        case 'ADD_CUSTOMER':{
            return [
                ...state,{...action.payload}
            ]
        }
       
        case 'EDIT_CUSTOMER' : {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return { ...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        case 'REMOVE_CUSTOMER':{
            return state.filter((customer) => {
                return customer._id !== action.payload._id
            })
        }
        default:
            return [...state]
    }
}

export default customerReducer