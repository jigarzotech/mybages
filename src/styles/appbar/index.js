import { IconButton, Box, List, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, DrawerWidth } from "../theme";
import './style.css'
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 8px',
    ['@media (max-width:450px)']: {
        paddingTop: "30px",
    },
}));
export const AppbarUser = styled(Typography)(() => ({
    fontSize: '18px',
    color: Colors.primary,
    position: 'absolute',
    right: 40,
    ['@media (max-width:450px)']: {
        fontSize: '12px',
    },
}))
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    color: Colors.secondary,
    ['@media (max-width:450px)']: {
        fontSize: '2em',
    },
    fontFamily: `'Montez','cursive`,
}))
export const AppbarPersonBtn = styled(Button)(() => ({
    padding: '4px',
    color: Colors.secondary,
    ['@media (max-width:450px)']: {
        padding: '2px',
    },
}))

export const MyList = styled(List)(({ type }) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
    ['@media (min-width:900px) and (max-width:950px)']: {
        width: '100%',
    }
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`,
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,
}));