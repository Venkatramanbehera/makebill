import React from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography, makeStyles } from '@material-ui/core'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { asyncAddCustomer, asyncEditCustomer } from '../../actions/customersAction';


const useStyles = makeStyles((theme) => ({
    card: {
      height: 'auto',
      marginLeft: 20,
      width:300
    },
    typography:{
        margin:20,
        fontSize:20,
        color:'Red'
    },
    button:{
        marginLeft : 30
    },
    textField:{
        marginBottom : 10,
        width : 'auto',
        marginLeft : 30,
        marginRight : 30
    }
  }));
  

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter your name')
      .required('Name is required'),
    mobile: yup
        .string('Enter your mobile')
        .required('Mobile number is required')
        .min(10,'min 10 digit required')
  });

const CustomerForm = ({editData,handleToggleFalse}) => {
    
    const { _id,name,email,mobile } = editData ? editData : {}

    const classes = useStyles()

    const dispatch = useDispatch()

    const handleToggle = () => {
        handleToggleFalse()
    }

    const formik = useFormik({
        initialValues: {
          email: email ? email : '',
          name: name ? name : '',
          mobile:  mobile ? mobile : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values,{ resetForm }) => {
            if(_id){
                dispatch(asyncEditCustomer(_id,values,resetForm,handleToggle))
            }else{
                dispatch(asyncAddCustomer(values,resetForm))
            }
        },
      });
      

    return (
        <div>
            <Card className={ classes.card }>
                <form onSubmit={ formik.handleSubmit }>
                    <CardContent>
                        <Typography  color="textSecondary" gutterBottom className={ classes.typography }>
                            { _id ? "Update Customer" : "Add Customer" } 
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
                            id="email"
                            name="email" 
                            label="Email" 
                            variant="outlined" 
                            type="email"
                            className={ classes.textField }
                            value={ formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}/>
                            <br />
                        <TextField 
                            id="mobile" 
                            name="mobile"
                            label="Mobile" 
                            variant="outlined" 
                            type="number"
                            className={ classes.textField }
                            value={ formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}/>

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

export default CustomerForm
