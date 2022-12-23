import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { addToCart } from '../../redux/cart/cartReducer'
import { toast } from "react-toastify";
export default function SingleProduct({ product, matches }) {
    const dispatch = useDispatch()
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);

    const cartDetails = useSelector((state) => state.carts)
    console.log({ cartDetails });
    const AddtoCartHandler = () => {
        // cart = [cartDetails, product]
        // setcarts((old) => {
        //     return ([...old, product])
        // })

        dispatch(addToCart(product))
        // dispatch(addCartItem(cart))
    }
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction='row'>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon colore='primary' />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon colore='primary' />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained" onClick={() => AddtoCartHandler()}>Add to cart</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    )
}