import {styled} from "@mui/material/styles";
import {Card, CardMedia, CardActions, Typography} from "@mui/material";

export const StyledMedia = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'
});
export const StyledDivOverlay = styled('div')({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
});
export const StyledDivOverlay2 = styled('div')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
});
export const StyledCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative'
});
export const CardActions = styled(CardActions)({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
});
export const StyledDivDetails = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
});
export const StyledTypographyTitle = styled(Typography)({
    padding: '0 16px'
});