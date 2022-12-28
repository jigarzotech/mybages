import React from 'react'
import { makeStyles, styled } from '@mui/styles';
import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import theme, { Colors } from '../../styles/theme';
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { products } from '../../data'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ProductAddToCart, Product, ProductImage } from "../../styles/products";
import { addToCart } from '../../redux/cart/cartReducer';
import { removeFromWishlist } from '../../redux/wishlist/wishlistReducer';
import '../../styles/appbar/style.css'

const useStyles = makeStyles({

    header: {
        color: Colors.secondary,
        cursor: 'pointer'
    },
    productWrapper: {
        padding: '20px 0px',
        display: 'flex',
    }
})

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

const MyWishlist = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const wishlistProduct = useSelector((state) => state.wishlist)
    // console.log({ wishlistProduct });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                variant="permanant"
                open={true}
                fullScreen>

                <DialogTitle
                    sx={{
                        background: Colors.primary,
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={"space-between"}
                    >

                        <Typography className={classes.header} fontSize={30} fontFamily={`'Montez','cursive`}
                            onClick={() => navigate('/home')}> My Bages</Typography>

                        <Typography color={Colors.secondary}> My Wishlist</Typography>
                        <IconButton
                            onClick={() => navigate('/home')}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    {wishlistProduct.wishlists.map((product) => (

                        <Box className={classes.productWrapper} flexDirection={matches ? "column" : "row"} >
                            <Product sx={{ mr: 4 }}>
                                <ProductImage src={product.image} sx={{
                                    height: "auto"
                                }} />
                            </Product>
                            <ProductDetailInfoWrapper>

                                <Typography sx={{ lineHeight: 2 }} variant="h4">
                                    {product.name}
                                </Typography>
                                <Typography variant="subtitle">
                                    {product.discription}
                                </Typography>
                                <Typography sx={{ color: Colors.primary, paddingTop: '10px' }} variant="subtitle1">
                                    Price: ${product.price}
                                </Typography>
                                <Box
                                    sx={{ mt: 4 }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-evenly"
                                >
                                    <Button variant="contained" sx={{ ml: matches ? '0px' : '40px' }}
                                        onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                                    <Button variant="contained"
                                        sx={{
                                            ml: matches ? '0px' : '40px', background: 'red',
                                            "&:hover": {
                                                background: Colors.danger
                                            },
                                        }}
                                        onClick={() => dispatch(removeFromWishlist(product))}>Remove </Button>
                                </Box>


                            </ProductDetailInfoWrapper>
                        </Box>
                    ))
                    }
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}
                    >
                        <FacebookIcon />
                        <TwitterIcon sx={{ pl: 2 }} />
                        <InstagramIcon sx={{ pl: 2 }} />
                    </Box>
                </DialogContent>

            </Dialog>
        </ThemeProvider>

    )
}

export default MyWishlist