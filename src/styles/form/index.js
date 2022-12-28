import styled from "@emotion/styled";
import { Button, FormControl, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import '../appbar/style.css'

export const LoginFormControl = styled(FormControl)(({ theme }) => ({
    m: 1,
    width: '28ch',
    [theme.breakpoints.down('sm')]: {
        width: '18ch',
    },
}))
export const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: '60%',
    fontSize: '2em',
    color: Colors.secondary,
    [theme.breakpoints.down('sm')]: {
        width: '70%',
    },
    fontFamily: `'Montez','cursive`,
}))
export const FormPaper = styled(Paper)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    width: '60%',
    padding: '50px 0px',
    marginTop: '20px'

}))
export const FormButton = styled(Button)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    width: '60%',
    marginTop: '20px'
}))
export const FormTypography = styled(Typography)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    color: Colors.form,
    marginTop: '20px',
    cursor: 'pointer'
}))

export const FormHeader = styled(Typography)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    color: Colors.secondary,
    marginTop: '20px',
    fontFamily: `'Montez','cursive`,

}))
export const FormError = styled(Typography)(() => ({
    display: "flex",
    color: Colors.danger,
    marginTop: '5px',
    marginBottom: '10px',
    fontSize: '12px'
}))