const initialState = []

const productReducer = (state=initialState,action) => {
    switch(action.type){
        case 'GET_PRODUCT':{
            return [ 
                ...state,...action.payload 
            ]
        }
        case 'ADD_PRODUCT':{
            return [
                ...state,{...action.payload}
            ]
        }
       
        case 'EDIT_PRODUCT' : {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return { ...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        case 'REMOVE_PRODUCT':{
            return state.filter((customer) => {
                return customer._id !== action.payload._id
            })
        }
        default:
            return [...state]
    }
}

export default productReducer