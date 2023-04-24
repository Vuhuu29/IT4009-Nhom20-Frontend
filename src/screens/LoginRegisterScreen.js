import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { useStyles } from '../style/css/login/login_register';
import LoginFormComponent from '../components/login/LoginFormComponent';
import RegisterFormComponent from '../components/login/RegisterFormComponent';
import { ComponentTransition, AnimationTypes } from "react-component-transition";


export default function LoginRegisterScreen(props) {
    const history = useHistory();
    const classes = useStyles();
    const [checkLogin, setCheckLogin] = useState(true)
    const formDataInput = () => {
        return (
            <ComponentTransition
                enterAnimation={AnimationTypes.scale.enter}
                exitAnimation={AnimationTypes.fade.exit}
            >
                {checkLogin ?
                    <LoginFormComponent
                        checkLogin={checkLogin}
                        setCheckLogin={setCheckLogin}     
                    /> :
                    <RegisterFormComponent
                        checkLogin={checkLogin}
                        setCheckLogin={setCheckLogin}
                    />
                }
            </ComponentTransition>
        )
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                {formDataInput()}
            </Grid>
        </Grid>
    );
}