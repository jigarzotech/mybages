import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper } from "@mui/material";
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
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    Signup

                </Box>
            </DialogTitle>
            <DialogContent>
                <Paper elevation={3} sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 'auto',
                    width: '60%',
                    padding: '50px 0px',
                    marginTop: '50px'

                }}>
                    <form className={classes.root} noValidate autoComplete="off" >
                        {IsErrorShow && <h3 style={{ color: 'red' }}>{error}</h3>}

                        <div>
                            <div>
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    name="name"
                                    value={newUser.name || ""}
                                    type="text"
                                    onChange={inputEvent}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    name="email"
                                    value={newUser.email || ""}
                                    type="email"
                                    onChange={inputEvent}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-password"
                                    label="Password"
                                    name="password"
                                    value={newUser.password || ""}
                                    type={showPassword ? "text" : "password"}
                                    onChange={inputEvent}
                                />
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    sx={{
                                        paddingTop: "20px"
                                    }}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>

                        </div>
                        <Button variant="contained"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                margin: 'auto',
                                width: '60%',
                                marginTop: '20px'
                            }}
                            onClick={submitDataHandler}>Submit</Button>
                        <Typography lineHeight={2} variant="caption2" sx={{
                            display: "flex",
                            justifyContent: "center",
                            margin: 'auto',
                            color: Colors.info,
                            marginTop: '20px',
                            cursor: 'pointer'
                        }} onClick={() => navigate('/')}>
                            Already have an account?
                        </Typography>
                    </form>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </Paper>
            </DialogContent>
        </Dialog>
    )
}