import React from "react";
import { Typography, Container, AppBar, Grid, Grow } from "@mui/material"

const App = () => {
    return(
        <Container maxWidth={"lg"}>
            <AppBar position={"static"} color={"inherit"}>
                <Typography variant={"h2"} align={"center"}>Memories</Typography>
                <img src={images} alt={"memories"} height={"60"}/>
            </AppBar>
        </Container>
    );
}

export default App