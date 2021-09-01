import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

import { Button, Typography } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Products.css'


const Products = () => {

    const [ toggleButton, setToggleButton ] = useState(false)

    const products = useSelector((state) => {
        return state.products
    })

    const handleToggle = () => {
        setToggleButton(true)
    }

    const handleToggleFalse = () => {
        setToggleButton(false)
    }

    return (
        <div className="products__page">
            <div className="header">

                <div className="title">
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2">
                            Product List
                    </Typography>
                </div>
                <div className="addCustomer__Btn">

                    <Button variant="outlined" color="secondary" onClick={ handleToggle }>
                        <AddBoxIcon/>
                    </Button>
                </div>

                </div>

                <div className="content">
                <div className="product__table">
                    {
                        products.length > 0 ? <ProductTable handleToggle={ handleToggle }/> : <h2>Add a customer</h2>
                    }
                </div>
                <div className="add__product">
                    {
                        toggleButton ? <ProductForm handleToggleFalse={ handleToggleFalse } /> : null
                    }
                </div>
                </div>
        </div>
    )
}

export default Products