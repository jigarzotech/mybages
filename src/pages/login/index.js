import { Dialog, FormControl, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Paper, Input, InputAdornment } from "@mui/material";
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
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUser } from "../../redux/user/action";
import { addProducts, getProducts } from "../../redux/products/action";
import { products } from '../../data'
import { styled, ThemeProvider } from "@mui/material/styles";
import { FormBox, FormPaper, LoginFormControl, FormButton, FormTypography } from "../../styles/form";
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

export default function Login() {
    const classes = useStyles();
    const classesIcon = useStylesIcon();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    useEffect(() => {
        dispatch(getUser())
        dispatch(getProducts())
    }, [])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const useDetails = useSelector((state) => state.user)
    // const productdetail = useSelector((state) => state.products)
    // console.log({ productdetail });

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
                    console.log('varified user', response.user.displayName);
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
                    // localStorage.setItem('email', user.email);
                    dispatch(addUser({ email: user.email, password: user.password }))
                    dispatch(addProducts(products))
                    setTimeout(() => {
                        navigate('/home')
                    }, 2000);
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
            // console.log(user);

            setError('')
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
                    <FormBox >
                        Login
                    </FormBox>
                </DialogTitle>
                <DialogContent>
                    <FormPaper elevation={3}>
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
                                    <LoginFormControl variant="outlined">
                                        <Typography>Email:</Typography>

                                        <Input
                                            id="standard-Email"
                                            name="email"
                                            value={email || ""}
                                            type="email"
                                            onChange={inputEvent}
                                        />
                                    </LoginFormControl>
                                </div>
                                <div>
                                    <LoginFormControl variant="outlined">

                                        <Typography>Password:</Typography>
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            onChange={inputEvent}
                                            value={password}
                                            name='password'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={handleMouseDownPassword}

                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </LoginFormControl>

                                    {/* <TextField
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
                                </IconButton> */}
                                </div>

                                {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password || ""}
                                    name="password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl> */}

                            </div>
                            <FormButton variant="contained" type='submit'
                            >Submit</FormButton>
                            <FormTypography lineHeight={2} variant="caption2" onClick={() => navigate('/signup')}>
                                Sign up for mybages
                            </FormTypography>
                        </form>
                    </FormPaper>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}