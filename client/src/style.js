import { styled } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";

// AppBar için özel stil
export const StyledAppBar = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

// Typography için özel stil
export const StyledTypography = styled(Typography)({
    color: 'rgba(0, 183, 255, 1)',
});

// img için özel stil (bu durumda doğrudan styled kullanılamaz, çünkü img bir MUI bileşeni değil)
// Bu yüzden bir div içinde stilize edip, o div'e img'i yerleştirebiliriz.
export const StyledImage = styled('div')({
    marginLeft: '15px',
    '& img': {
        height: '60px', // img için yükseklik
    },
});