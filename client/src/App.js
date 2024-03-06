import React from "react";
import { Container, Grid, Grow } from "@mui/material"

import memory from './memories/memory.png'
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { StyledAppBar, StyledTypography, StyledImage } from './style';

const App = () => {
    return(
        <Container maxWidth={"lg"}>
            <StyledAppBar position={"static"} color={"inherit"}>
                <StyledTypography variant={"h2"} align={"center"}>Memories</StyledTypography>
                <StyledImage><img src={memory} alt={"memories"} /></StyledImage>
            </StyledAppBar>
            <Grow in={true}>
                <Container>
                    <Grid container={true} justifyContent={"space-between"} alignItems={"stretch"} spacing={3}>
                        <Grid item={true} xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item={true} xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App