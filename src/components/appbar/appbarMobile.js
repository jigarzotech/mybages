import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@material-ui/icons/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import ActionMobile from "./actionMobile";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AppbarMobile({ matches }) {
    const user = useSelector((state) => state.user)
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;
    const navigate = useNavigate()

    const { setDrawerOpen, setShowSearchBox, setDrawerActionOpen } = useUIContext();
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Box sx={{ alignItems: 'center', display: 'flex' ,cursor:'pointer'}} onClick={() => {
                navigate(auth ? '/home' : '/')
            }}>
                <img src={require('../../image/logo.png')} width="50px" height='50px'></img>
                <AppbarHeader textAlign='center' variant="h4" >
                    My Bages
                </AppbarHeader>
            </Box>
            {/* <IconButton sx={{ marginRight: '20px' }} onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton> */}
            <ActionMobile />
        </AppbarContainer>
    )
}