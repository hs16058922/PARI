import React from 'react'
import proto from '../assets/prototype.jpg'
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import logo from '../assets/logo.png';
import power from '../assets/power_up.mp3';

const Welcome = () => {
    let history = useHistory();
    const handleClick = (e) => {
        e.preventDefault()
        var audio = new Audio(power)
        audio.play()
        history.push('/Home')
    }

    return (
        <div>
            <img src={proto} alt="none" style={{ position: "relative", height: "100vh", width: "100vw", zIndex: -1 }} />
            <div style={{
                position: "absolute", zIndex: 10, top: 0, left: 0,
                background: "linear- gradient(to right, #0f2027, #203a43, #2c5364)",
                width: "100%",
                display: "flex"
            }}>
                <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img src={logo} alt="none" style={{ height: "50px", width: "120px" }} />
                    <h6 style={{ fontWeight: "bold", marginTop: "10px", textShadow: "2px 2px 4px #000000", color: "aliceblue", fontSize: "15px" }}>हमारा प्रयास सबके लिए आवास</h6>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "180px" }}>
                    <h1 style={{ color: "aliceblue", textShadow: "2px 2px 4px #000000" }}>WELCOME TO PARI RESIDENCY</h1>
                    <Button variant="contained" style={{
                        background: "#ff2f00",
                        border: "2px solid black",
                        boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
                        textShadow: "2px 6px 4px #000000",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "white",
                        padding: "2px",
                        paddingRight: "5px",
                        paddingLeft: "5px"
                    }} size="large" onClick={handleClick} >
                        Start Lottery Now
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Welcome