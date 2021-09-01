import axios from "axios"

export const asyncGetProducts = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers : {
                'Authorization' : 'Bearer '+localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            dispatch(getProduct(data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export const getProduct = (data) => {
    return {
        type : 'GET_PRODUCT',
        payload : data
    }
}

export const asyncAddProduct = (formData,resetForm) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products',formData,{
            headers : {
                'Authorization' : 'Bearer '+ localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            if(data.createdAt){
                resetForm({
                    values:''
                })
            }
            dispatch(addProduct(data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export const addProduct = (formData) => {
    return {
        type : 'ADD_PRODUCT',
        payload : formData
    }
}


export const asyncRemoveProduct = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,{
            headers : {
                'Authorization' : 'Bearer '+ localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            dispatch(removeProduct(data))
        })
        .catch(err => console.log(err.message))
    }
}

export const removeProduct = (data) => {
    return {
        type : 'REMOVE_PRODUCT',
        payload : data
    }
}

export const asyncEditProduct = (_id,formData,resetForm,handleToggle) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,formData,{
            headers : {
                'Authorization' : 'Bearer '+ localStorage.getItem('token')
            }
        })
        .then( response => {
            const data = response.data
            if(data.createdAt){
                handleToggle()
                resetForm({
                    values:''
                })
            }
            dispatch(editProduct(data))
        })
        .catch( err => console.log(err.message))
    }
}

export const editProduct = (editedData) => {
    return {
        type : 'EDIT_PRODUCT',
        payload : editedData
    }
} 