import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@material-ui/icons/Search'
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
export default function AppbarDesktop({ matches }) {

    const {  setShowSearchBox } = useUIContext();
    return (

        <AppbarContainer>
            <AppbarHeader>
                My Bages
            </AppbarHeader>
            <MyList type='row'>
                <ListItemText primary='Home' />
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