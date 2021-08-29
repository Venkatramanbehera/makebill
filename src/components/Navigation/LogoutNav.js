import { Link } from "react-router-dom"

const LogoutNav = ({classes}) => {      
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

export default LogoutNav