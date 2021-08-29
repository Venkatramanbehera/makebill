import { AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import './Navigation.css'

const { Link } = require("react-router-dom")

const useStyle = makeStyles((theme) => ({
    AppBar : {
        minHeight : 50,
        justifyContent : "space-between",
        backgroundColor : '#c1c9c4',
    },
    link : {
        fontFamily : "Times New Roman",
        textDecoration : 'none',
        fontSize : 30,
        paddingTop : 10,
        paddingLeft : 0,
        paddingRight : 10
    }
}))

const LoginNav = () => {
    const classes = useStyle()
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
                    to="/logout" 
                    className={ classes.link }
                    >Logout</Link>
            </div>
        </>
    )
}

const LogoutNav = () => {
    const classes = useStyle()
    return (
        <>
            <div className="about">
                <Link 
                    to="/about" 
                    className={ classes.link }
                >About</Link>
            </div>
            <div className="login">
                <Link 
                    to="/login" 
                    className={ classes.link }
                >Login</Link>
            </div>
        </>
    )
}

const Navigation = (props) => {

    const classes = useStyle()

    const isLoggedIn = useSelector((state) => {
        return state.userDetails.isLoggedIn
    })

    return (
        <>
            <AppBar className={ classes.AppBar }>
                    <div className="navigation">
                        <div className="left__navigation">
                            <Link 
                                to="/" 
                                className={ classes.link }
                            >MakeBill.com</Link>
                        </div>
                        <div className="right__navigation">
                            {
                                isLoggedIn ? <LoginNav/> : <LogoutNav/>
                            }
                        </div>
                    </div>
            </AppBar>
        </>
    )
}

export default Navigation
