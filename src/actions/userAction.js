import axios from "axios"

export const asyncLogin = (formData,redirectToProduct) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',formData)
            .then( (res) => {
                const data = res.data
                if(data.errors){
                    dispatch(isLoginError(data.errors))
                }else if(data.token){
                    redirectToProduct()
                    localStorage.setItem('token',data.token)
                    dispatch(isLogin(true))
                    dispatch(isLoginError(''))
                }
            } )
            .catch( (err) => {
                console.log(err.message);
            })
    }
}

export const isLoginError = (error) => {
    return {
        type : "IS_LOGIN_ERROR",
        payload : error
    }
}

export const isLogin = (bool) => {
    return {
        type : 'IS_LOGIN',
        payload : bool
    }
}