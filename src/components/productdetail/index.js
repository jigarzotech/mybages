import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/products";
import { BannerShopButton } from "../../styles/banner";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/cart/cartReducer";


function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const dispatch = useDispatch()

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanant"
            open={open}
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
                    Product title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
                    <Product sx={{ mr: 4 }}>
                        <ProductImage src={product.image} sx={{
                            height: "auto"
                        }} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle">Availability: 10 in stock</Typography>
                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle">
                            {product.discription}
                        </Typography>
                        <Typography sx={{ color: Colors.primary, paddingTop: '10px' }} variant="subtitle">
                            {product.price}
                        </Typography>
                        <Box
                            sx={{ mt: 4 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Button variant="contained" sx={{ ml: matches ? '0px' : '40px' }}
                                onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{ mt: 4, color: Colors.light }}
                        >
                            <FavoriteIcon sx={{ mr: 2 }} />
                            Add to wishlist
                        </Box>
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
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    );
}