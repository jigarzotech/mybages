import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import theme, { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { makeStyles } from '@mui/styles';
import { Product, ProductImage, ProductFavButton } from "../../styles/products";
import IncDec from "../../components/ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/system';
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { removeFromCart } from '../../redux/cart/cartReducer'
import '../../styles/appbar/style.css'
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/wishlistReducer";
import Header from "../../components/header.js";
import AppbarMobile from "../../components/appbar/appbarMobile";
import AppbarDesktop from "../../components/appbar/appbarDesktop";
import { TabScrollButton } from '@mui/material';
import { UIProvider } from "../../context/ui";
import Appbar from "../../components/appbar";
import AppDrawer from "../../components/drawer";
const useStyles = makeStyles({

    header: {

        color: Colors.secondary,
        cursor: 'pointer'
    }
})


const ProductDetailWrapper = styled(Box)(() => ({
    display: "flex",
    padding: '10px 0px',
    borderBottom: '2px solid',
    borderColor: Colors.border,
    marginBottom: '10px'
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function MyCart() {
    const themes = useTheme();
    const matches = useMediaQuery(themes.breakpoints.down("md"));
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles()
    const cartItems = useSelector((state) => state.carts)
    const wishlistProduct = useSelector((state) => state.wishlist)

    // console.log({ cartItems });
    return (
        <ThemeProvider theme={theme}>

            <Container
                maxWidth='xl'
                sx={{
                    background: '#fff'
                }}>
                <UIProvider>
                    <Appbar />

                    {/* <DialogTitle
                sx={{
                    background: Colors.primary,
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    {/* <Typography className={classes.header} fontSize={30} fontFamily={`'Montez','cursive`}
                        onClick={() => navigate('/home')}> My Bages</Typography> */}
                    {/* <Header />

                    <Typography color={Colors.secondary}> My Cart</Typography>
                    <IconButton
                        onClick={() => navigate('/home')}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle> */}
                    {/* {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />} */}

                    <Box display='flex' justifyContent={'center'}
                        sx={{ p: 4, color: Colors.primary, }}>
                        <Typography variant='h4' sx={{ borderBottom: `2px solid ${Colors.primary}` }}>
                            My Cart
                        </Typography>
                    </Box>
                    <DialogContent >
                        {cartItems.carts?.map((item, index) => (

                            <ProductDetailWrapper display={"flex"}
                                flexDirection={matches ? "column" : "row"} key={index}>
                                <Product sx={{ mr: 4 }}>
                                    <ProductImage src={item.image} sx={{
                                        height: "auto"
                                    }} />
                                </Product>
                                <ProductDetailInfoWrapper>
                                    <Typography variant="subtitle" mt={2}>Availability: 10 in stock</Typography>
                                    <Typography sx={{ lineHeight: 2 }} variant="h4">
                                        {item.name}
                                    </Typography>

                                    <Box
                                        sx={{ mt: 4 }}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <IncDec
                                            cartQuantity={item.cardQuantity}
                                            item={item}
                                        />
                                        <Button variant="contained" sx={{ ml: matches ? '0px' : '40px' }}>Buy Now</Button>
                                        <Button variant="contained" sx={{
                                            ml: matches ? '0px' : '40px', background: 'red',
                                            "&:hover": {
                                                background: Colors.danger
                                            },
                                        }} onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                                    </Box>
                                    <Typography mt={2} color={Colors.success} variant="subtitle">
                                        Price: $ {item.price}
                                    </Typography>
                                    <Typography mt={1} color={Colors.info} variant="subtitle"
                                    // sx={{ border: "1px solid", padding: "5px" }}
                                    >
                                        Total: $ {(item.price * item.cardQuantity).toFixed(2)}
                                    </Typography>
                                    <ProductFavButton
                                        isFav={wishlistProduct.wishlists.find((product) => product.id === item.id) ? 1 : 0}
                                        onClick={() => {
                                            wishlistProduct.wishlists.find((product) => product.id === item.id) ?
                                                dispatch(removeFromWishlist(item)) : dispatch(addToWishlist(item))

                                        }}
                                    >
                                        <FavoriteIcon sx={{ mr: 2 }} />
                                        Add to wishlist
                                    </ProductFavButton>

                                </ProductDetailInfoWrapper>
                            </ProductDetailWrapper>
                        ))}
                        <Typography mt={1} color={Colors.success} variant="subtitle"
                            sx={{ border: "1px solid", padding: "5px", width: '100%' }}>
                            SubTotal: $ {(cartItems.carts.reduce((a, b) => a + (b.cardQuantity * b.price), 0)).toFixed(2)}
                        </Typography>
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
    );
}