import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from "../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../../redux/user/userReducer";
import { deleteProducts } from "../../redux/products/productReducer";
import PersonIcon from '@mui/icons-material/Person';
import { AppbarPersonBtn } from '../../styles/appbar';

export default function ActionMobile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const user = useSelector((state) => state.user)
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <AppbarPersonBtn variant="contained" sx={{
                        color: Colors.secondary, background: Colors.primary,
                        "&:hover": {
                            background: Colors.secondary,
                            color: Colors.primary
                        },
                    }} {...bindTrigger(popupState)}>
                        <PersonIcon />
                    </AppbarPersonBtn>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                            <ListItemButton
                                sx={{
                                    justifyContent: 'center'
                                }}>
                                <ListItemIcon
                                    onClick={() => navigate('/mycart')}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: location.pathname === '/mycart' && auth && Colors.primary
                                    }}>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}><ListItemButton
                            sx={{
                                justifyContent: 'center'
                            }}>
                            <ListItemIcon
                                onClick={() => navigate('/mywishlist')}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: location.pathname === '/mywishlist' && auth && Colors.primary
                                }}>
                                <FavoriteIcon />
                            </ListItemIcon>
                        </ListItemButton></MenuItem>
                        <MenuItem onClick={popupState.close}> <ListItemButton
                            sx={{
                                justifyContent: 'center'
                            }}>
                            <ListItemIcon
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: Colors.secondary

                                }}>
                                <LogoutIcon onClick={() => {
                                    dispatch(deleteUser())
                                    dispatch(deleteProducts())
                                    navigate('/')
                                }
                                } />
                            </ListItemIcon>
                        </ListItemButton></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}