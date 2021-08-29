import React from 'react'
import { Button, Checkbox, FormControlLabel, Link, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'

import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogin } from '../../actions/userAction'

const useStyle = makeStyles((theme) => ({
    checkBox : {
        textAlign : 'center'
    },
    buttonStyle : {
        marginRight : 30,
    },
    textField : {
        marginTop : 30,
        marginBottom : 20,
        margin : 8,
        width : 400,
        backgroundColor : '#e3dfdc',
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
  });

const Login = (props) => {

    const dispatch = useDispatch()

    const errors = useSelector((state) => {
        return state.userDetails.errors
    })

    const redirectToProduct = () => {
        props.history.push('/products')
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          dispatch(asyncLogin(values,redirectToProduct));
        },
      });

    const classes = useStyle()

    // for redirect to signup page
    const handleSignUp = () => {
        props.history.push('/signin')
    }

    return (
            <div className="login__form">
                <h2>Log In with us</h2>
                {
                    errors ? <h3 style={{ color : 'red'}}>{ errors }</h3> : null
                }
                <form autoComplete="off" onSubmit={ formik.handleSubmit }>
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

                <div className="check">
                    <FormControlLabel
                        control={
                            <Checkbox checked={true}  name="checked" />
                        }
                        label="Remember username"
                        className = { classes.checkBox }
                    />
                    <Link href="#">forget password</Link>
                </div>

                <Button 
                    variant="outlined" 
                    color="secondary"
                    className={ classes.buttonStyle }
                    type="submit"
                >LogIn
                </Button>
                <Button 
                    variant="outlined" 
                    color="secondary"
                    className={ classes.buttonStyle }
                    onClick = { handleSignUp }
                >SignUp
                </Button>
                </form>
            </div>
        )
}

export default Login
