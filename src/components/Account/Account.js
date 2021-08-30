import { Card, CardActionArea, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import './Account.css'

const useStyles = makeStyles({
    root: {
        margin : 40,
        Width: 340,
        backgroundColor : '#bfbfbb'
    },
    span: {
        paddingLeft : 60,
        color:'blue'
    },
    typography: {
        fontFamily: 'cursive',
        fontSize: 35,
        color: 'cyan'
    },
    typographyHeading:{
        color:'#362eb0',
        textAlign:'left',
        paddingLeft:30,
        paddingTop:10
    },
    typographyContent:{
        color:'#c8c5e8',
        textAlign:'left',
        paddingLeft:30
    },
    typographyHello:{
        paddingTop:160,
        color:'black',
        fontFamily:'cursive',
        fontSize:35
    },
    typographyUser:{
        paddingTop:30,
        fontSize:40,
        fontFamily:'cursive',
        color:'red'
    }
  });

const Account = () => {
    const classes = useStyles()

    const user = useSelector((state) => {
        return state.userDetails.user
    })

    return (
        <div className="accounts__page">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <div className="account__details">
                        <div className="left__account">
                            <Typography gutterBottom variant="h5" component="h2"    className={ classes.typographyHello }>
                                    Hello
                            </Typography>
                            <Typography 
                                    variant="h5"
                                    className={ classes.typographyUser }>
                                    { user.username.slice(0,6).toUpperCase() }
                            </Typography>
                        </div>
                        <div className="right__account">
                            <Typography gutterBottom variant="h5" component="h2" className={ classes.typography }>
                                Profile Information
                            </Typography>
                            <div className="account__information">
                                <Typography  
                                    variant="h5" 
                                    className={ classes.typographyHeading}>
                                    UserName 
                                </Typography>
                                <Typography 
                                    gutterBottom 
                                    variant="h5"
                                    className={ classes.typographyContent }>
                                     { user.username }
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    className={ classes.typographyHeading}>
                                    Email
                                </Typography>
                                <Typography 
                                    variant="h5" 
                                    gutterBottom
                                    className={ classes.typographyContent }>
                                    { user.email }
                                </Typography>

                                <Typography 
                                    variant="h5"
                                    className={ classes.typographyHeading}>
                                    Business Name
                                </Typography>
                                <Typography 
                                    variant="h5"
                                    className={ classes.typographyContent }>
                                    { user.businessName }
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    className={ classes.typographyHeading}>
                                    Address
                                </Typography>
                                <Typography 
                                    variant="h5" 
                                    className={ classes.typographyContent }>
                                    { user.address }
                                </Typography>

                                <Typography 
                                    variant="h5" 
                                    className={ classes.typographyHeading}>
                                     Join Since
                                </Typography>
                                <Typography 
                                    variant="h5"
                                    className={ classes.typographyContent }>
                                        { moment(user.createdAt,'YYYYMMDD').fromNow()}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    </CardContent>
                </CardActionArea>
                </Card>



        </div>
    )
}

export default Account
