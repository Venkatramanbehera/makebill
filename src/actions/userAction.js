import axios from "axios"
import { asyncGetCustomers } from "./customersAction"
import { asyncGetProducts } from "./productsAction"

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
                    dispatch(asyncUserInformation())
                    dispatch(asyncGetCustomers())
                    dispatch(asyncGetProducts())
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

export const asyncUserInformation = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            dispatch(userInformation(data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export const userInformation = (user) => {
    return {
        type : 'USER_INFORMATION',
        payload : user
    }
}