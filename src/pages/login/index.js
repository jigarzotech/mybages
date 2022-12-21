import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Paper } from "@mui/material";
import { Colors } from "../../styles/theme";
import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { signInWithEmailAndPassword } from "firebase/auth"
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

export default function Login({ setSignupDialog }) {
    const classes = useStyles();
    const classesIcon = useStylesIcon();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { email, password } = user
    const inputEvent = (e) => {
        let { value, name } = e.target
        setUser((olddata) => {
            return { ...olddata, [name]: value }
        })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const submitDataHandler = (event) => {
        event.preventDefault()
        if (!email || !password) {
            toast.error('please input all the input field', {
                position: "top-center",
                toastId: 'error2',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((response) => {
                    console.log('varified user', response);
                    toast.success('login Successfully', {
                        position: "top-center",
                        toastId: 'success2',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('FirebaseError', {
                        position: "top-center",
                        toastId: 'error4',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
            console.log(user);

            setError('')
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
                    Login

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
                    <form className={classes.root} noValidate autoComplete="off"
                        onSubmit={submitDataHandler}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            margin: 'auto',
                            width: '60%',
                        }}>
                        {error && <h3 style={{ color: 'red' }}>{error}</h3>}
                        <div>
                            <div>
                                <TextField
                                    id="standard-Email"
                                    label="Email"
                                    name="email"
                                    value={email || ""}
                                    type="email"
                                    onChange={inputEvent}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    name="password"
                                    value={password || ""}
                                    type={showPassword ? "text" : "password"}
                                    onChange={inputEvent}
                                />
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{
                                        paddingTop: "20px"
                                    }}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>

                        </div>
                        <Button variant="contained" type='submit'
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                margin: 'auto',
                                width: '60%',
                                marginTop: '20px'
                            }}>Submit</Button>
                        <Typography lineHeight={2} variant="caption2" sx={{
                            display: "flex",
                            justifyContent: "center",
                            margin: 'auto',
                            color: Colors.info,
                            marginTop: '20px',
                            cursor: 'pointer'
                        }} onClick={() => navigate('/signup')}>
                            Sign up for mybages
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