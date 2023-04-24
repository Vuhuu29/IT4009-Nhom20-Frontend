import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../style/css/login/login_register';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/index'
import { ComponentTransition, AnimationTypes } from "react-component-transition";
const FormStudent = (props) => {
    return (
        <div className={props.classes.content}>
            <Link color="secondary" href="#" variant="body2" className={props.classes.textPrev} onClick={() => { props.setCheckLogin(!props.checkLogin) }} >
                {"Đăng nhập"}
            </Link>
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Tên đăng nhập"
                name="username"
                color="secondary"
                autoComplete="username"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        username: e.target.value
                    })
                }}
            />
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                color="secondary"
                InputLabelProps={{
                    shrink: true
                }}
                autoComplete="current-password"
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        password: e.target.value
                    })
                }}
            />

            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Họ tên đầy đủ"
                name="fullname"
                color="secondary"
                autoComplete="fullname"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        full_name: e.target.value
                    })
                }}
            />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="gender"
                label="Giới tính"
                name="gender"
                color="secondary"
                autoComplete="gender"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        gender: e.target.value
                    })
                }}
            />
            <Grid container direction="row">
                <Grid item xs>
                </Grid>
                <Grid item>
                    <Link color="secondary" href="#" variant="body2" onClick={() => { props.setshowDetails(!props.showDetails) }} >
                        {"Sau"}
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}
const FormParent = (props) => {
    return (
        <div className={props.classes.content}>
            <Link color="secondary" href="#" variant="body2" className={props.classes.textPrev} onClick={() => { props.setshowDetails(!props.showDetails) }} >
                {"Trước"}
            </Link>
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="usernameParent"
                label="Họ tên đầy đủ của phụ huynh"
                name="usernameParent"
                color="secondary"
                autoComplete="usernameParent"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        full_name: e.target.value
                    })
                }}
            />
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="parentPhoneNumber"
                label="Số điện thoại của phụ huynh"

                id="parentPhoneNumber"
                color="secondary"
                InputLabelProps={{
                    shrink: true
                }}
                autoComplete="parentPhoneNumber"
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        phone_number: e.target.value
                    })
                }}
            />

            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="parentIdCard"
                label="Cmnd của phụ huynh"
                name="parentIdCard"
                color="secondary"
                autoComplete="parentIdCard"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        id_card: e.target.value
                    })
                }}
            />
            
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="emailParent"
                label="Email phụ huynh"
                name="emailParent"
                color="secondary"
                autoComplete="emailParent"
                autoFocus
                InputLabelProps={{
                    shrink: true
                }}
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                type="date"
                format={'DD/MM/YYYY'}
                id="parentDateOfBirth"
                label="Ngày sinh của phụ huynh"
                InputLabelProps={{
                    shrink: true
                }}
                color="secondary"
                // autoFocus
                onChange={(e) => {
                    props.setForm({
                        ...props.form,
                        birthday: e.target.value
                    })
                }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={props.classes.submit}
                onClick={() => { props.register() }}
            >
                Đăng kí
            </Button>
        </div>
    )
}
export default function RegisterFormComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [formStudent, setFormStudent] = useState({})
    const [formParent, setFormParent] = useState({})
    const [showDetails, setshowDetails] = useState(true)
    const register = () => {
        let data = {
            student: {...formStudent},
            parent: {...formParent}
        }
        console.log("data...", data);
        dispatch(actions.register(data))
      
    }
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <ComponentTransition
                enterAnimation={AnimationTypes.scale.enter}
                exitAnimation={AnimationTypes.fade.exit}
            >
                {showDetails ?
                    <FormStudent
                        form={formStudent}
                        setForm={setFormStudent}
                        classes={classes}
                        showDetails={showDetails}
                        setshowDetails={setshowDetails}
                        checkLogin={props.checkLogin}
                        setCheckLogin={props.setCheckLogin}
                    />
                    :
                    <FormParent
                        form={formParent}
                        setForm={setFormParent}
                        classes={classes}
                        showDetails={showDetails}
                        setshowDetails={setshowDetails}
                        checkLogin={props.checkLogin}
                        setCheckLogin={props.setCheckLogin}
                        register={register}
                    />
                }
            </ComponentTransition>
            {
                showDetails
                    ?
                    <div></div>
                    :
                    <Grid container className={classes.textBottom}>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link color="secondary" href="#" variant="body2" onClick={() => { props.setCheckLogin(!props.checkLogin) }} >
                                {"Đăng nhập"}
                            </Link>
                        </Grid>
                    </Grid>
            }

        </div>
    )
}