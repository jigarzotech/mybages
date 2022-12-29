import * as yup from "yup";

const nameRegex = new RegExp(/^[a-zA-Z ]{4,15}$/i);
const emailRegex = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
const passRegex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)

export const errorMessage = {
    name: '*name should have 4 to 15 characters',
    email: '*Invalid Email Address',
    password: '*password should contain atleast one number, one special character and have 6 to 16 characters'
}

export const validationSchema = yup.object().shape({
    name: yup.string()
        .required('*name is required')
        .matches(nameRegex, errorMessage.name),
    email: yup.string()
        .required('*email is required')
        .matches(emailRegex, errorMessage.email),
    password: yup.string()
        .required('*password is required')
        .matches(passRegex, errorMessage.password),
});

export const defaultValues = {
    name: '',
    email: '',
    password: '',
}

