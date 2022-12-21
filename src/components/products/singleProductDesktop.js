import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from "../../redux/action";

export default function SingleProduct({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.data)
    // console.log({ user });
    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>

                {showOptions &&
                    <ProductAddToCart show={showOptions} variant='contained'
                        onClick={() => dispatch(addProduct(product))}>Add to cart</ProductAddToCart>}
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