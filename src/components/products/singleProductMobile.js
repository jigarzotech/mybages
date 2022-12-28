import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cart/cartReducer'
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/wishlistReducer";
export default function SingleProduct({ product, matches }) {
    const dispatch = useDispatch()
    const [ProductDetailDialog, showProductDetailDialog] =
        useDialogModal(ProductDetail);

    const wishlistProduct = useSelector((state) => state.wishlist)

    const AddtoCartHandler = () => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction='row'>
                        <ProductFavButton isFav={wishlistProduct.wishlists.find((item) => item.id === product.id) ? 1 : 0}
                            onClick={() => {
                                wishlistProduct.wishlists.find((item) => item.id === product.id) ? dispatch(removeFromWishlist(product)) : dispatch(addToWishlist(product))
                            }}>
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