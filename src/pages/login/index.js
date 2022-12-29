import { Dialog, FormControl, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Paper, Input, InputAdornment, Container } from "@mui/material";
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
// import { addUser, getUser } from "../../redux/user/action";
import { addProducts, getProducts } from "../../redux/products/productReducer";
import { addUser } from "../../redux/user/userReducer";
import { products } from '../../data'
import { styled, ThemeProvider } from "@mui/material/styles";
import { FormBox, FormPaper, LoginFormControl, FormButton, FormTypography, FormHeader } from "../../styles/form";
import theme from '../../styles/theme'
import { loginError, loginErrorToast, loginInvalidError, loginInvalidErrorToast, loginSuccess, loginSuccessToast } from "../../components/toast/toastMessage";
import Header from "../../components/header.js";
import { UIProvider } from "../../context/ui";
import Appbar from "../../components/appbar";
import AppDrawer from "../../components/drawer";

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
        // dispatch(getUser())
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
            toast.error(loginError, loginErrorToast);
        }
        else {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((response) => {
                    console.log('varified user', response.user.displayName);
                    toast.success(loginSuccess, loginSuccessToast);
                    // localStorage.setItem('email', user.email);
                    dispatch(addUser({ name: response.user.displayName, email: user.email, password: user.password }))
                    dispatch(addProducts(products))
                    setTimeout(() => {
                        navigate('/home')
                    }, 2500);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(loginInvalidError, loginInvalidErrorToast);
                });
            // console.log(user);

            setError('')
        }
    }
    return (
        <ThemeProvider theme={theme}>

            <Container
                maxWidth='xl'
                sx={{
                    background: '#fff'
                }}>
                <UIProvider>
                    <Appbar />
                    <DialogContent>
                        <FormHeader variant="h2">Login</FormHeader>

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
                                            <Typography color={Colors.info} mt={1}>Email:</Typography>

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

                                            <Typography color={Colors.info} mt={1}>Password:</Typography>
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
                                    </div>
                                </div>
                                <FormButton variant="contained" type='submit'
                                >Submit</FormButton>
                                <FormTypography lineHeight={2} variant="caption2" onClick={() => navigate('/signup')}>
                                    Sign up for mybages
                                </FormTypography>
                            </form>
                        </FormPaper>
                    </DialogContent>
                <AppDrawer />
            </UIProvider>
        </Container>
        </ThemeProvider >
    )
}