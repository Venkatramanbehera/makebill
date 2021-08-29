import { AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {  useSelector } from "react-redux"
import './Navigation.css'

import { Link } from "react-router-dom"
import LoginNav from "./LoginNav"
import LogoutNav from "./LogoutNav"

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
                                isLoggedIn ? <LoginNav classes={ classes }/> : <LogoutNav classes={ classes }/>
                            }
                        </div>
                    </div>
            </AppBar>
        </>
    )
}

export default Navigation
