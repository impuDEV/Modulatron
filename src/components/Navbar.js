import React from 'react'
import {AppBar, Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import {NavLink} from 'react-router-dom'

// const theme = createTheme({
//     breakpoints: {
//         values: {
//             mobile: 0,
//             tablet: 640,
//             laptop: 1024,
//             desktop: 1280
//         }
//     },
// })

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        // <nav>
        //     <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
        //         <a href="/" className="brand-logo">Main</a>
        //         <ul id="nav-mobile" className="right hide-on-med-and-down">
        //             <li><NavLink to="/about">About</NavLink></li>
        //         </ul>
        //     </div>
        // </nav>
    )
}