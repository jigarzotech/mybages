import { Button, Container, Dialog, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../../styles/pageNotFound';
import theme, { Colors } from '../../styles/theme';
import { withStyles } from '@mui/styles';
const styles121 = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'green',
        height: 48,
        padding: '0 30px',
    },
};

function PageNotFound(props) {
    const classes = useStyles();
    const navigate = useNavigate()
    const { classessacsa } = props;
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                variant="permanant"
                open={true}
                fullScreen
            >
                <Box className={classes.container}
                >
                    <Button className={styles121.root}>Higher-order component</Button>
                    <Typography variant='h1' className={classes.heading}
                        fontSize={150}>404</Typography>
                    <Typography fontSize={22} mt={2}> Page Not Found</Typography>
                    <Typography className={classes.paraOne} fontSize={20} mt={2}>
                        Oops,you've lost in space</Typography>
                    <Typography className={classes.paraTwo} fontSize={15} mt={2}>
                        we can't find the page that you've looking for...</Typography>
                    <Box className={classes.buttonDiv} mt={10}>
                        <Button className={classes.button} variant='contained'
                            onClick={() => navigate('/')}>Go Home</Button ></Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    )
}

// export default PageNotFound
export default withStyles(styles121)(PageNotFound);