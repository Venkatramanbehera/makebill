import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'

import './SignIn.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const useStyle = makeStyles((theme) => ({
    checkBox : {
        textAlign : 'center'
    },
    buttonStyle : {
        marginRight : 30,
        backgroundColor : 'cyan'
    },
    textField : {
        marginTop : 10,
        marginBottom : 10,
        margin : 10,
        width : 400,
        color : 'black'
    }
}))

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    username: yup
        .string('Enter your username')
        .min(6,'Username should be of minimum 6 characters length')
        .required('Username is required'),
    businessName: yup
        .string('Enter your Business Type')
        .required('Business Type is required'),
    address : yup
        .string('Enter your Address')
        .required('Address is required'),
});

const SignIn = (props) => {


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            businessName:'',
            address : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('http://dct-billing-app.herokuapp.com/api/users/register',values)
                .then((res) => {
                    const data = res.data
                    if(data.createdAt){
                        swal("Good job!", "Your Account successfully created!", "success")
                        props.history.push('/login')
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })
        },
      });

      const classes = useStyle()

    return (
        <div className="SignIn__page">
            <h2>Create an Account</h2>
            <form autoComplete="off" onSubmit={ formik.handleSubmit }>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        className={ classes.textField }
                        placeholder="Enter Your username"
                        margin="normal"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        className={ classes.textField }
                        placeholder="Enter Your Email"
                        margin="normal"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        className={ classes.textField }
                        placeholder="Enter Your Password"
                        margin="normal"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="businessName"
                        name="businessName"
                        label="Business Name"
                        className={ classes.textField }
                        placeholder="Enter Your Business Name"
                        margin="normal"
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                        error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                        helperText={formik.touched.businessName && formik.errors.businessName}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        id="address"
                        name="address"
                        label="Address"
                        className={ classes.textField }
                        placeholder="Enter Your Address"
                        margin="normal"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br /> 
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        className={ classes.buttonStyle }
                        type="submit"
                    >Create Account
                    </Button>


                    <div className="check">
                        <p>Already user</p>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
        </div>
    )
}

export default SignIn
