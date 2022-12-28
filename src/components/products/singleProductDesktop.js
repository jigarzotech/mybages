import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useEffect, useState } from "react";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cart/cartReducer'
import { toast } from "react-toastify";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/wishlistReducer";

export default function SingleProduct({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false)
    const dispatch = useDispatch()
    const wishlistProduct = useSelector((state) => state.wishlist)
    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);
    const AddtoCartHandler = () => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton
                    isFav={wishlistProduct.wishlists.find((item) => item.id === product.id) ? 1 : 0}
                    onClick={() => {
                        wishlistProduct.wishlists.find((item) => item.id === product.id) ?
                            dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product))
                    }}>
                    <FavoriteIcon />
                </ProductFavButton>

                {showOptions &&
                    <ProductAddToCart show={showOptions} variant='contained'
                        onClick={() => AddtoCartHandler()}>Add to cart</ProductAddToCart>}
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction='column'>
                        <ProductActionButton>
                            <ShareIcon colore='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon colore='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailDialog product={product} />
        </>
    )
}