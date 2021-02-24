import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Box, Container, Paper} from "@material-ui/core";
import MyDrawer from "./MyDrawer";

function App() {
    return (
        <Container maxWidth={"lg"}>
            <MyDrawer key={'myDrawer'}/>
            <Paper elevation={1}>
                <Button variant={"contained"} color={"primary"}>
                    Test
                </Button>
            </Paper>
        </Container>
    );
}

export default App;
