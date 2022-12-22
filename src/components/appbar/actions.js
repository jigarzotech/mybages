import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { deleteUser } from "../../redux/user/action";
import { deleteProducts } from "../../redux/products/action";

export default function Actions({ matches }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Component = matches ? ActionIconsContainerMobile :
        ActionIconsContainerDesktop
    return (
        <Component>
            <MyList type='row'>
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}>
                    <ListItemIcon onClick={() => navigate('/mycart')}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary
                        }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}>
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: matches && Colors.secondary

                        }}>
                        <LogoutIcon onClick={() => {
                            dispatch(deleteUser())
                            dispatch(deleteProducts())
                        }
                        } />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />

            </MyList>
        </Component>
    )
}