import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: Colors.light_gray,
    padding: '0px 0px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItem: 'center'
    }
}))
export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
        width: '350px',

    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px',
        margin: 'auto'
    }
}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    Maxwidth: 420,
    padding: '30px',
    alignItems: "center"
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('sm')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    }
}))

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary,
    ],
})(({ theme }) => ({
    padding: "20px 80px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
        padding: "10px 50px",
        fontSize: "14px",
    },
}));