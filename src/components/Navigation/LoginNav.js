import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import { isLogin } from '../../actions/userAction'

const LoginNav = (props) => {

    const { classes } = props

    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        history.push('/')
        localStorage.removeItem('token')
        dispatch(isLogin(false))
    }

    return (
        <>
            <div className="customers">
                <Link 
                    to="/customers" 
                    className={ classes.link }
                    >Customers</Link>
            </div>
            <div className="products">
                <Link 
                    to="/products" 
                    className={ classes.link }
                    >Products</Link>
            </div>
            <div className="account">
                <Link 
                    to="/account" 
                    className={ classes.link }
                    >Account</Link>
            </div>
            <div className="bills">
                <Link 
                    to="/bills" 
                    className={ classes.link }
                    >Bills</Link>
            </div>
            <div className="logout">
                <Link 
                    to="#" 
                    onClick={ handleLogout }
                    className={ classes.link }
                    >Logout</Link>
            </div>
        </>
    )
}

export default LoginNav
