import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <BannerContainer>
                <BannerImage src={require('../../image/bag.jpeg')} />
                <BannerContent>
                    <Typography variant="h6">
                        Huge Collection
                    </Typography>
                    <BannerTitle variant="h2">
                        New Bages
                    </BannerTitle>
                    <BannerDescription variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate
                    </BannerDescription>
                    <BannerShopButton color='primary'>Show Now</BannerShopButton>
                </BannerContent>
            </BannerContainer>
        </>
    )
}