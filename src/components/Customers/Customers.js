import React,{ useState } from 'react'
import { useSelector } from 'react-redux'

import CustomerForm from './CustomerForm'
import CustomerTable from './CustomerTable'

import './Customers.css'
import { Button, Typography } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const Customers = (props) => {

    const [ toggleButton, setToggleButton ] = useState(false)

    const customers = useSelector((state) => {
        return state.customers
    })

    const handleToggle = () => {
        setToggleButton(true)
    }

    const handleToggleFalse = () => {
        setToggleButton(false)
    }

    return (
        <div className="customers__page" id="customer__page">
            <div className="header">

                <div className="title">
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2">
                            Customer List
                    </Typography>
                </div>
                <div className="addCustomer__Btn">

                    <Button variant="outlined" color="secondary" onClick={ handleToggle }>
                        <PersonAddIcon/>
                    </Button>
                </div>
            
            </div>

            <div className="content">
                <div className="customer__table">
                    {
                        customers.length > 0 ? <CustomerTable handleToggle={ handleToggle }/> : <h2>Add a customer</h2>
                    }
                </div>
                <div className="add__customer">
                    {
                        toggleButton ? <CustomerForm handleToggleFalse={ handleToggleFalse } /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Customers
