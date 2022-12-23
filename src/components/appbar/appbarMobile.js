import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@material-ui/icons/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import ActionMobile from "./actionMobile";

export default function AppbarMobile({ matches }) {

    const { setDrawerOpen, setShowSearchBox, setDrawerActionOpen } = useUIContext();
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign='center' variant="h4" >
                My Bages
            </AppbarHeader>
            <IconButton sx={{ marginRight: '20px' }} onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>
            <ActionMobile />
        </AppbarContainer>
    )
}