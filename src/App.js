import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {Navbar} from "./components/Navbar";
import {Box, CssBaseline, styled} from '@mui/material'

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
}))

function App() {
    const routes = useRoutes()

    return (
        <Router>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    flexGrow: 1,
                    alignItems: "center",
                    backgroundColor: "lightgray"
                }}
            >
                <Navbar />
                <Div>{"This div`s text looks like that of button"}</Div>
                {routes}
            </Box>

        </Router>
    )
}

export default App
