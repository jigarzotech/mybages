import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/products";
import { BannerShopButton } from "../../styles/banner";
import IncDec from "../../components/ui/incdec";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { removeFromCart } from '../../redux/cart/cartReducer'
function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    // padding: theme.spacing(4),
    padding: '10px 0px'
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function MyCart() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.carts)
    console.log({ cartItems });
    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanant"
            open={true}
            fullScreen
        >
            <DialogTitle
                sx={{
                    background: Colors.secondary,
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    My Cart
                    <IconButton
                        onClick={() => navigate('/home')}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                {cartItems.carts?.map((item, index) => (

                    <ProductDetailWrapper display={"flex"}
                        flexDirection={matches ? "column" : "row"} key={index}>
                        <Product sx={{ mr: 4 }}>
                            <ProductImage src={item.image} sx={{
                                height: "auto"
                            }} />
                        </Product>
                        <ProductDetailInfoWrapper>
                            <Typography variant="subtitle">Availability: 10 in stock</Typography>
                            <Typography sx={{ lineHeight: 2 }} variant="h4">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle">
                                {item.price}
                            </Typography>
                            <Box
                                sx={{ mt: 4 }}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <IncDec cartQuantity={item.cardQuantity} />
                                <Button variant="contained" sx={{ ml: matches ? '0px' : '40px' }}>Buy Now</Button>
                                <Button variant="contained" sx={{ ml: matches ? '0px' : '40px', background: 'red' }} onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                sx={{ mt: 4, color: Colors.light }}
                            >
                                <FavoriteIcon sx={{ mr: 2 }} />
                                Add to wishlist
                            </Box>

                        </ProductDetailInfoWrapper>
                    </ProductDetailWrapper>
                ))}

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
    );
}