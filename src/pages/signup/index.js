import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper, Input, InputAdornment } from "@mui/material";
import { Colors } from "../../styles/theme";
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FormBox, FormPaper, LoginFormControl, FormButton, FormTypography } from "../../styles/form";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from '../../styles/theme'

function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}
const useStylesIcon = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        '& > span': {
            margin: theme.spacing(2),
        },
    },
}));
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Signup({ setSignupDialog }) {
    const classes = useStyles();
    const classesIcon = useStylesIcon();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const nameRegex = new RegExp(/^[a-zA-Z ]+$/i);
    const emailRegex = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
    const passRegex = new RegExp(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/)

    const [error, setError] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [IsErrorShow, SetIsErrorShow] = useState(false)
    // const { name, email, password } = newUser
    const inputEvent = (e) => {
        let { value, name } = e.target
        setNewUser((olddata) => {
            return { ...olddata, [name]: value }
        })
    }

    const submitDataHandler = (event) => {
        event.preventDefault()
        if (!newUser.name || !newUser.email || !newUser.password) {
            toast.error('please input all the input field', {
                position: "top-center",
                toastId: 'error1',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (!nameRegex.test(newUser.name)) {
            setError({ name: "Enter Name Properly" })
            SetIsErrorShow(true)
        }
        else if (!emailRegex.test(newUser.email)) {
            setError({ email: "Enter Email Properly" })
            SetIsErrorShow(true)
        }
        // else if (!passRegex.test(newUser.password)) {
        //     setError({ password: "Enter Password Properly" })
        //     SetIsErrorShow(true)
        // }
        else {
            // createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            //     .then((response) => {
            //         const user = response.user
            //         updateProfile(user, {
            //             displayName: newUser.name
            //         })
            //         console.log('data is sent to Firebase', response);
            // toast.success('Signup Successfully', {
            //     position: "top-center",
            //     toastId: 'success1',
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            //     })
            //     .catch((error) => {
            //         console.log(error);
            // toast.error('FirebaseError', {
            //     position: "top-center",
            //     toastId: 'error3',
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            //     });

            console.log(newUser);
            setError('')
            SetIsErrorShow(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                TransitionComponent={SlideTransition}
                variant="permanant"
                open={true}
                fullScreen
            >
                <DialogTitle
                    sx={{
                        background: Colors.secondary,
                    }}
                >
                    <FormBox>
                        Signup
                    </FormBox>
                </DialogTitle>
                <DialogContent>
                    <FormPaper elevation={3}>
                        <form className={classes.root} noValidate autoComplete="off" >
                            {IsErrorShow && <h3 style={{ color: 'red' }}>{error}</h3>}

                            <div>
                                <div>
                                    <LoginFormControl variant="outlined">
                                        <Typography>Name:</Typography>
                                        <Input
                                            id="standard-Email"
                                            label="Name"
                                            name="name"
                                            value={newUser.name || ""}
                                            type="text"
                                            onChange={inputEvent}
                                        />
                                    </LoginFormControl>
                                </div>
                                <div>
                                    <LoginFormControl variant="outlined">
                                        <Typography>Email:</Typography>

                                        <Input
                                            id="standard-email"
                                            label="Email"
                                            name="email"
                                            value={newUser.email || ""}
                                            type="email"
                                            onChange={inputEvent}
                                        />
                                    </LoginFormControl>

                                </div>
                                <div>
                                    <LoginFormControl variant="outlined">

                                        <Typography>Password:</Typography>
                                        <Input
                                            name="password"
                                            value={newUser.password || ""}
                                            type={showPassword ? "text" : "password"}
                                            onChange={inputEvent}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </LoginFormControl>

                                </div>

                            </div>
                            <FormButton variant="contained" onClick={submitDataHandler}>
                                Submit</FormButton>
                            <FormTypography lineHeight={2} variant="caption2"
                                onClick={() => navigate('/')}>
                                Already have an account?
                            </FormTypography>
                        </form>
                    </FormPaper>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}