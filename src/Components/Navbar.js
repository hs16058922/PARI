import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    text_shadow: {
        textShadow: "2px 2px 4px #000000",
        fontSize: "40px",
        color: "white"
    },
    box_shadow: {
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "130%"
    },
    container: {
        background: "linear-gradient(to right, #c9d6ff, #e2e2e2);",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
)

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <img src={logo} alt="none" style={{ height: "50px", width: "120px", margin: "20px" }} />
            <h3 className={classes.text_shadow} style={{ marginLeft: "20px", color: "#2208ff" }}>WELCOME TO PARI RESIDENCY LOTTERY REVEAL</h3>
        </div>
    )
}
export default Navbar;