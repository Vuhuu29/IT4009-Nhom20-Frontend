import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../style/css/login/login_register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/css/login/loginChecked.css'
import { FormGroup, Input, Label } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import *as actions from '../../actions/index'
import { useHistory } from "react-router-dom";
export default function LoginFormComponent(props) {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();
    const [form, setForm] = useState({})
    const [role, setRole] = useState(1)
    const userState = useSelector((state) => state.userState)
    const loginHandle = () => {
        let data = {
            type: role,
            userName: form.user_name,
            password: form.password
        }
        dispatch(actions.login(data));
    }
    useEffect(() => {
        async function loginHandle() {
            if (userState.stateLogin != undefined) {
                if (userState.stateLogin.status == "true") {
                    await localStorage.setItem("token", userState.stateLogin.token)
                    await localStorage.setItem("UserId", userState.stateLogin.data.id)
                    await localStorage.setItem("UserRole", userState.stateLogin.data.role)
                    switch (userState.stateLogin.data.role) {
                        case "ROLE_STUDENT":
                            history.push("/student")
                            break;
                        case "ROLE_PARENT":
                            history.push("/student")
                            break;
                        case "ROLE_TEACHER":
                            history.push("/teacher")
                            break;
                        case "ROLE_ADMIN":
                            history.push("/admin1")
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        loginHandle()
    }, [userState])
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <div style={{ width: '100%', textAlign: 'left', marginTop: 20 }}>
                <p style={{ fontWeight: 'bold' }}>Vui lòng chọn vai trò đăng nhập : </p>
                <div>
                    <FormGroup check>
                        <Input
                            name="radio"
                            type="radio"
                            defaultChecked={true}
                            onChange={(e) => { setRole(1) }}
                        />
                        {' '}
                        <Label check>
                            Học sinh
                        </Label>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup check>
                        <Input
                            name="radio"
                            type="radio"
                            onChange={(e) => { setRole(2) }}
                        />
                        {' '}
                        <Label check>
                            Phụ huynh học sinh
                        </Label>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup check>
                        <Input
                            name="radio"
                            type="radio"
                            color="red"
                            onChange={(e) => { setRole(3) }}
                        />
                        {' '}
                        <Label check>
                            Nhân viên
                        </Label>
                    </FormGroup>
                </div>
            </div>



            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="username"
                label={role === 2 ? "Số điện thoại phụ huynh" : "Tên đăng nhập"}
                name="username"
                color="secondary"
                autoComplete="username"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    setForm({
                        ...form,
                        user_name: e.target.value
                    })
                }}
            />
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label={role === 2 ? "Số cccd của phụ huynh " : "Mật khẩu"}
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    setForm({
                        ...form,
                        password: e.target.value
                    })
                }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => loginHandle()}
            >
                Sign In
            </Button>
            <Grid container className={classes.textBottom}>
                <Grid item xs>
                </Grid>
                <Grid item>
                    <Link color="secondary" href="#" variant="body2" onClick={() => { props.setCheckLogin(!props.checkLogin) }} >
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}