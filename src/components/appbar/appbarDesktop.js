import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@material-ui/icons/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { useSelector } from "react-redux";

export default function AppbarDesktop({ matches }) {
    const navigate = useNavigate()
    const location = useLocation()
    const user = useSelector((state) => state.user)
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;
    const { setShowSearchBox } = useUIContext();
    return (

        <AppbarContainer>
            <Box sx={{ alignItems: 'center', display: 'flex', cursor: 'pointer' }} onClick={() => {
                navigate(auth ? '/home' : '/')
            }}>
                <img src={require('../../image/logo.png')} width="50px" height='50px'></img>
                <AppbarHeader>
                    My Bages
                </AppbarHeader>
            </Box>
            <MyList type='row' sx={{ cursor: 'pointer', textAlign: 'center', fontWeight: 'bold', color: Colors.dim_grey }}>
                <ListItemText primary='Home'
                    sx={{
                        color: location.pathname === '/home' && auth &&
                            Colors.primary, borderBottom: location.pathname === '/home' && auth && `1px solid ${Colors.primary}`
                    }} onClick={() => navigate('/home')} />
                <ListItemText primary='Categories' />
                <ListItemText primary='Products' />
                <ListItemText primary='Contact Us' />
                <ListItemButton
                    sx={{
                        justifyContent: 'center'
                    }}>

                    <ListItemIcon onClick={() => setShowSearchBox(true)}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Actions matches={matches} />
            </MyList>
        </AppbarContainer>
    )
}