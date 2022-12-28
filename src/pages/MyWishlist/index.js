import React from 'react'
import { makeStyles, styled } from '@mui/styles';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/system';
import theme, { Colors } from '../../styles/theme';
import { Box, Button, DialogContent, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from 'react-redux';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Product, ProductImage } from "../../styles/products";
import { addToCart } from '../../redux/cart/cartReducer';
import { removeFromWishlist } from '../../redux/wishlist/wishlistReducer';
import '../../styles/appbar/style.css'
import { UIProvider } from '../../context/ui';
import AppDrawer from '../../components/drawer';
import Appbar from '../../components/appbar';

const useStyles = makeStyles({

    header: {
        color: Colors.secondary,
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
    const themes = useTheme();
    const matches = useMediaQuery(themes.breakpoints.down('md'));
    const wishlistProduct = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>

            <Container
                maxWidth='xl'
                sx={{
                    background: '#fff'
                }}>
                <UIProvider>
                    <Appbar />
                    <Box display='flex' justifyContent={'center'}
                        sx={{ p: 4, color: Colors.primary, }}>
                        <Typography variant='h4' sx={{ borderBottom: `2px solid ${Colors.primary}` }}>
                            My Wishlist
                        </Typography>
                    </Box>
                    <DialogContent>
                        {wishlistProduct.wishlists.map((product) => (

                            <Box className={classes.productWrapper} flexDirection={matches ? "column" : "row"} key={product.id}>
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
                    <AppDrawer />
                </UIProvider>
            </Container>
        </ThemeProvider>
    )
}

export default MyWishlist