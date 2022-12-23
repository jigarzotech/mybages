import styled from "@emotion/styled";
import { Button, FormControl, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";


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
    [theme.breakpoints.down('sm')]: {
        width: '70%',
    },

}))
export const FormPaper = styled(Paper)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    width: '60%',
    padding: '50px 0px',
    marginTop: '50px'

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
    color: Colors.info,
    marginTop: '20px',
    cursor: 'pointer'
}))