import React from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography, makeStyles } from '@material-ui/core'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { asyncAddProduct, asyncEditProduct } from '../../actions/productsAction';


const useStyles = makeStyles((theme) => ({
    card: {
      height: 450,
      marginLeft: 20,
      maxWidth:300,
      marginBottom:20
    },
    typography:{
        margin:20,
        fontSize:20,
        color:'Red'
    },
    button:{
        marginLeft : 35,
        marginTop : 45
    },
    textField:{
        marginBottom : 10,
        width : 'auto',
        marginLeft : 30,
        marginRight : 30,
        marginTop : 20
    }
  }));
  

const validationSchema = yup.object({
    name: yup
      .string('Enter Product name')
      .required('Name is required'),
    price: yup
        .string('Enter Product price')
        .required('Product price is required')
  });

const ProductForm = ({editData,handleToggleFalse}) => {
    
    const { _id,name,price } = editData ? editData : {}

    const classes = useStyles()

    const dispatch = useDispatch()

    const handleToggle = () => {
        handleToggleFalse()
    }

    const formik = useFormik({
        initialValues: {
          name: name ? name : '',
          price:  price ? price : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values,{ resetForm }) => {
            if(_id){
                dispatch(asyncEditProduct(_id,values,resetForm,handleToggle))
            }else{
                dispatch(asyncAddProduct(values,resetForm))
            }
        },
      });
      

    return (
        <div>
            <Card className={ classes.card }>
                <form onSubmit={ formik.handleSubmit }>
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom className={ classes.typography }>
                            { _id ? "Update Product" : "Add Product" } 
                        </Typography>
                        <TextField 
                            id="name" 
                            name="name" 
                            label="Name" 
                            variant="outlined"
                            className={ classes.textField }
                            value={ formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name} />
                            <br />
                        <TextField 
                            id="price" 
                            name="price"
                            label="Price" 
                            variant="outlined" 
                            type="number"
                            className={ classes.textField }
                            value={ formik.values.price}
                            onChange={formik.handleChange}
                            error={formik.touched.price && Boolean(formik.errors.price)}
                            helperText={formik.touched.price && formik.errors.price}/>

                    </CardContent>
                    <CardActions>
                        <Button 
                            variant="contained" 
                            color="primary"
                            type="submit"
                            className={ classes.button }
                            > { _id ? 'Update':'Add' }
                        </Button>
                        <br />
                        <br />
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={ handleToggle }
                            className={ classes.button }
                            > Cancel 
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    )
}

export default ProductForm
