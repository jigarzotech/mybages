import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@material-ui/icons/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {

    const { setDrawerOpen, setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign='center' variant="h4">
                My Bages
            </AppbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}