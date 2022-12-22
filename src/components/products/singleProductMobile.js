import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, getCartItems } from '../../redux/cart/action'
import { useEffect, useState } from "react";

export default function SingleProduct({ product, matches }) {
    const dispatch = useDispatch()
    const cartDetails = useSelector((state) => state.carts)
    console.log({ cartDetails });
    const [cart, setcart] = useState(cartDetails)
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);
    useEffect(() => {
        dispatch(getCartItems())
    }, [])
    const AddtoCartHandler = () => {
        // setcart((oldData) => {
        //     return ([...oldData, product])
        // })
        dispatch(addCartItem(product))
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