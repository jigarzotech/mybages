import { Button, Container, Dialog, DialogTitle, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../../styles/pageNotFound';
import theme, { Colors } from '../../styles/theme';
import '../../styles/appbar/style.css'
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AppDrawer from '../../components/drawer';
import { UIProvider } from '../../context/ui';
import Appbar from '../../components/appbar';


function PageNotFound() {
    const classes = useStyles();
    const navigate = useNavigate()
    const themes = useTheme();
    const matches = useMediaQuery(themes.breakpoints.down("sm"));

    return (
        <ThemeProvider theme={theme}>

            <Container
                maxWidth='xl'
                sx={{
                    background: '#fff'
                }}>
                <UIProvider>
                    <Appbar />
                    <Box className={classes.container} >

                        {matches ? <Box></Box> : <Box className={classes.box1} >
                        </Box >}
                        <Box className={classes.box2} sx={{ width: matches ? '100%' : '50%' }}>
                            <Typography variant='h1' className={classes.heading}
                                fontSize={150} fontFamily={`'Montez','cursive`}>404</Typography>
                            <Typography fontSize={25} mt={2} > Page Not Found</Typography>
                            {/* <Typography className={classes.paraOne} fontSize={20} mt={2}>
                    Oops,you've lost in space</Typography> */}
                            <Typography className={classes.paraTwo} fontSize={20} mt={2}>
                                we can't find the page that you've looking for...</Typography>
                            <Box className={classes.buttonDiv} mt={10}>
                                <Button className={classes.button} variant='contained'
                                    onClick={() => navigate('/')}>Go Home</Button >
                            </Box>
                        </Box>
                    </Box>
                    <AppDrawer />
                </UIProvider>
            </Container>
        </ThemeProvider>

    )
}
export default PageNotFound
