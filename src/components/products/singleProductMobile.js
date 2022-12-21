import { Stack } from "@mui/system";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../productdetail";
import useDialogModal from '../../hooks/useDialogModal'

export default function SingleProduct({ product, matches }) {
    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);
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
            <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    )
}