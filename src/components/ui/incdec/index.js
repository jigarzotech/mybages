import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "./clamp";
import { Colors } from "../../../styles/theme";
import { decreaseQuantity, addToCart } from '../../../redux/cart/cartReducer'
import { useDispatch } from "react-redux";
export default function IncDec({ cartQuantity, item }) {
    const clampV = clamp(1, 10);
    const [value, setValue] = useState(1);
    const dispatch = useDispatch()
    return (
        <Box display="flex">
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                // onClick={() => setValue(clampV(value - 1))}
                onClick={() => dispatch(decreaseQuantity(item))}
            >
                <RemoveIcon />
            </IconButton>
            <Typography
                variant="h6"
                sx={{
                    border: `1px solid ${Colors.secondary}`,
                    p: 2,
                }}
            >
                {cartQuantity}
            </Typography>
            <IconButton
                sx={{
                    borderRadius: 0,
                    background: `${Colors.secondary}`,
                }}
                // onClick={() => setValue(clampV(value + 1))}
                onClick={() => dispatch(addToCart(item))}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
}
