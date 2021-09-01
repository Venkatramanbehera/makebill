import axios from "axios"

export const asyncGetCustomers = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers : {
                'Authorization' : 'Bearer '+localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            dispatch(getCustomer(data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export const getCustomer = (data) => {
    return {
        type : 'GET_CUSTOMER',
        payload : data
    }
}

export const asyncAddCustomer = (formData,resetForm) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',formData,{
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
            dispatch(addCustomer(data))
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export const addCustomer = (formData) => {
    return {
        type : 'ADD_CUSTOMER',
        payload : formData
    }
}


export const asyncRemoveCustomer = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${_id}`,{
            headers : {
                'Authorization' : 'Bearer '+ localStorage.getItem('token')
            }
        })
        .then((response) => {
            const data = response.data
            dispatch(removeCustomer(data))
        })
        .catch(err => console.log(err.message))
    }
}

export const removeCustomer = (data) => {
    return {
        type : 'REMOVE_CUSTOMER',
        payload : data
    }
}

export const asyncEditCustomer = (_id,formData,resetForm,handleToggle) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${_id}`,formData,{
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
            dispatch(editCustomer(data))
        })
        .catch( err => console.log(err.message))
    }
}

export const editCustomer = (editedData) => {
    return {
        type : 'EDIT_CUSTOMER',
        payload : editedData
    }
} 