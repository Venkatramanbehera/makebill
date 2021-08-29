const initialUserState = { 
                            isLoggedIn:false,
                            errors : ''
                         }

const userReducers = (state = initialUserState, action) => {
    switch(action.type){
        case 'IS_LOGIN' : {
            return {
                ...state,
                isLoggedIn : action.payload
            }
        }
        case 'IS_LOGIN_ERROR' : {
            return {
                ...state,
                errors : action.payload
            }
        }
        default :
            return state
    }
}

export default userReducers