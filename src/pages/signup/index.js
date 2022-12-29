import { Slide, Box, IconButton, DialogContent, Typography, Button, Stack, Paper, Input, InputAdornment, Container } from "@mui/material";
import { Colors } from "../../styles/theme";
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FormBox, FormPaper, LoginFormControl, FormButton, FormTypography, FormError, FormHeader } from "../../styles/form";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../styles/theme'
import { useForm } from "react-hook-form";
import { defaultValues, validationSchema } from "../../components/validation";
import { yupResolver } from '@hookform/resolvers/yup';
import { signupInvalidError, signupInvalidErrorToast, signupSuccess, signupSuccessToast } from "../../components/toast/toastMessage";
import Header from "../../components/header.js";
import AppDrawer from "../../components/drawer";
import { UIProvider } from "../../context/ui";
import Appbar from "../../components/appbar";

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

export default function Signup() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        defaultValues: defaultValues, resolver: yupResolver(validationSchema)
    });


    const submitDataHandler = (data) => {
        // // event.preventDefault()
        // if (data.name === "" || data.email === "" || data.password === "") {
        //     // toast.error('please input all the input field', {
        //     //     position: "top-center",
        //     //     toastId: 'error1',
        //     //     autoClose: 2000,
        //     //     hideProgressBar: false,
        //     //     closeOnClick: true,
        //     //     pauseOnHover: true,
        //     //     draggable: true,
        //     //     progress: undefined,
        //     //     theme: "light",
        //     // });

        // }

        // else {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                const user = response.user
                updateProfile(user, {
                    displayName: data.name
                })
                console.log('data is sent to Firebase', response);
                console.log(data);
                toast.success(signupSuccess, signupSuccessToast);
            })
            .catch((error) => {
                console.log(error);
                toast.error(signupInvalidError, signupInvalidErrorToast);
            });
        // }
        console.log(data);

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
                        <FormHeader variant="h2">Signup</FormHeader>
                        <FormPaper elevation={3}>
                            <form className={classes.root} noValidate autoComplete="off"
                                onSubmit={handleSubmit(submitDataHandler)}>

                                <div>
                                    <div>
                                        <LoginFormControl variant="outlined">
                                            <Typography color={Colors.info} mt={1}>Name:</Typography>
                                            <Input
                                                {...register("name")}
                                                placeholder='Enter Your Name'
                                            />

                                            {errors.name && <FormError role="alert">
                                                {errors?.name?.message}</FormError>}
                                        </LoginFormControl>
                                    </div>
                                    <div>
                                        <LoginFormControl variant="outlined">
                                            <Typography color={Colors.info} mt={1}>Email:</Typography>

                                            <Input
                                                {...register("email")}
                                                placeholder='Enter Your Email'
                                            />
                                            {errors?.email && <FormError role="alert">{errors?.email?.message}</FormError>}

                                        </LoginFormControl>

                                    </div>
                                    <div>
                                        <LoginFormControl variant="outlined">

                                            <Typography color={Colors.info} mt={1}>Password:</Typography>
                                            <Input
                                                {...register("password")}
                                                placeholder='Enter Password'
                                                type={showPassword ? "text" : "password"}
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
                                            {errors?.password && <FormError role="alert">
                                                {errors?.password?.message}
                                            </FormError>}
                                        </LoginFormControl>

                                    </div>
                                </div>

                                <FormButton variant="contained"
                                    type="submit">
                                    Submit</FormButton>
                                <FormTypography lineHeight={2} variant="caption2"
                                    onClick={() => navigate('/')}>
                                    Already have an account?
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