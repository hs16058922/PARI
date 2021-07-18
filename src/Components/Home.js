import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DataTable from 'react-data-table-component';
import { connect } from 'react-redux';
import loading from '../assets/loading.gif';
import congrats from '../assets/congrats.gif';
import click from '../assets/click.wav';
import add from '../assets/add.wav';
import { useHistory } from "react-router-dom";
var XLSX = require('xlsx');


const useStyles = makeStyles((theme) => ({
    root: {
        width: "180px"
    },
    root1: {
        '& .super-app-theme--header': {
            background: "linear-gradient(to left, #243b55, #141e30)",
            textShadow: "2px 2px 4px #000000",
            fontSize: "15px",
            color: "white",
        },
    },
    text_shadow: {
        textShadow: "2px 2px 4px #000000",
        fontSize: "30px"
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

}))

const Home = ({ dispatch, customers, winners }) => {
    const classes = useStyles();
    let history = useHistory();
    const [list, setList] = React.useState([]);
    const [current, setCurrent] = React.useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
        running: ""
    })

    React.useEffect(() => {
        var cust = sessionStorage.getItem("customers")
        var lis = sessionStorage.getItem("list");
        var cur = sessionStorage.getItem("current");
        var win = sessionStorage.getItem("winners");
        if (cust !== null) {
            dispatch({ type: "SET_CUSTOMER", customers: JSON.parse(cust) })
        }
        if (win !== null) {
            dispatch({ type: "SET_WINNERS", winners: JSON.parse(win) })
        }
        if (lis !== null) {
            setList(JSON.parse(lis))
        }
        if (cur !== null) {
            setCurrent(JSON.parse(cur))
        }
    }, [])

    const column = [
        {
            name: 'Customer Code',
            selector: 'status',
            sortable: true,
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.CUSTOMER_CODE}</h6>,
        },
        {
            name: 'Name',
            selector: 'action',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.CUSTOMER_NAME}</h6>,
        },
    ]

    const customStyles = {
        headRow: {
            style: {
                background: "linear-gradient(to left, #243b55, #141e30)",
                fontSize: "5px",
                fontWeight: "bold",
            }
        },
        headCells: {
            style: {
                color: "white",
                textShadow: "2px 2px 4px #000000",
                fontSize: ".7rem",
                fontWeight: "bold",
            }
        },
        rows: {
            style: {
                background: "linear-gradient(to right, #00416a, #00416a)",
                color: "black",
                margin: 0,
                padding: 0
            }
        },
        cells: {
            style: {
                color: "black",
                fontSize: "5px",
            }
        }
    }

    const handleList = (count, mode) => {
        const tabledata = customers
        const selectedData = []
        var audio = new Audio(click);
        audio.play();
        var i = 1;

        function myLoop() {
            setTimeout(function () {
                const random = Math.floor(Math.random() * tabledata.length);
                var selectedValue = tabledata[random];
                selectedValue["serial_number"] = i;
                selectedData.push(selectedValue)
                setList([...selectedData])
                dispatch({ type: "REMOVE_CUSTOMER", CUSTOMER_CODE: selectedValue.CUSTOMER_CODE })

                if (mode === "first") {
                    dispatch({ type: "ADD_FIRST_WINNER", winner: selectedValue });
                }
                else if (mode === "second") {
                    dispatch({ type: "ADD_SECOND_WINNER", winner: selectedValue })
                }
                else if (mode === "third") {
                    dispatch({ type: "ADD_THIRD_WINNER", winner: selectedValue })
                }
                else if (mode === "fourth") {
                    dispatch({ type: "ADD_FOURTH_WINNER", winner: selectedValue })
                }
                else if (mode === "fifth") {
                    dispatch({ type: "ADD_FIFTH_WINNER", winner: selectedValue })
                }
                else if (mode === "sixth") {
                    dispatch({ type: "ADD_SIXTH_WINNER", winner: selectedValue })
                }
                else {
                    dispatch({ type: "ADD_SEVENTH_WINNER", winner: selectedValue })
                }

                i++;
                if (i <= count) {
                    myLoop();
                }

                var audio1 = new Audio(add);
                audio1.play();
            }, 1)
        }

        myLoop();
    }

    const handleWinner = (e) => {
        e.preventDefault()
        history.push("/Winners")
    }

    const exportXml = () => {
        var ws = XLSX.utils.json_to_sheet(list);
        sessionStorage.setItem("customers", JSON.stringify(customers))
        sessionStorage.setItem("list", JSON.stringify(list))
        sessionStorage.setItem("current", JSON.stringify(current))
        sessionStorage.setItem("winners", JSON.stringify(winners))
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "People");

        XLSX.writeFile(wb, "sheet1.xlsx");
    }

    const column1 = [
        {
            name: 'S.No.',
            selector: 'serial',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.serial_number}</h6>,
        },
        {
            name: 'Customer Code',
            selector: 'customer_code',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.CUSTOMER_CODE}</h6>,
        },
        {
            name: 'Name',
            selector: 'name',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.CUSTOMER_NAME}</h6>,
        },
    ]


    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <div className={classes.root1} style={{ margin: "30px" }} >
                    <DataTable
                        title={
                            <div style={{
                                background: "linear-gradient(to right, #4ac29a, #bdfff3)",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h5 style={{
                                    padding: "20px", width: "400px", margin: 0, color: "white",
                                    textShadow: "2px 2px 4px #000000"
                                }}>ALL PARTCIPATING CONTESTENTS</h5>
                            </div>}
                        columns={column}
                        data={customers}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div >
                <Card className={classes.root} style={{ margin: "20px", background: "linear-gradient(to right, #215f00, #e4e4d9)" }}>
                    <CardContent>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Button variant="contained" color="primary" disabled={current.first}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, first: true, running: "first" })
                                    handleList(10, "first")
                                }} >
                                <div><b>2.99 LAKH</b><p style={{ marginBottom: "0" }}>(10)</p></div>
                            </Button>
                            <Button variant="contained" color="primary" disabled={current.second}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, second: true, running: "second" })
                                    handleList(20, "second")
                                }} >
                                <div><b>3.99 LAKH</b><p style={{ marginBottom: "0" }}>(20)</p></div>
                            </Button>
                            <Button variant="contained" color="primary" disabled={current.third}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, third: true, running: "third" })
                                    handleList(30, "third")
                                }} >
                                <div><b>4.99 LAKH</b><p style={{ marginBottom: "0" }}>(30)</p></div>
                            </Button>
                            <Button variant="contained" color="primary" disabled={current.fourth}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, fourth: true, running: "fourth" })
                                    handleList(50, "fourth")
                                }}
                            ><div><b>5.99 LAKH</b><p style={{ marginBottom: "0" }}>(50)</p>
                                </div></Button>
                            <Button variant="contained" color="primary" disabled={current.fifth}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, fifth: true, running: "fifth" })
                                    handleList(50, "fifth")
                                }}
                            ><div><b>6.99 LAKH</b><p style={{ marginBottom: "0" }}>(50)</p></div>
                            </Button>
                            <Button variant="contained" color="primary" disabled={current.sixth}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, sixth: true, running: "sixth" })
                                    handleList(50, "sixth")
                                }}
                            ><div><b>7.99 LAKH</b><p style={{ marginBottom: "0" }}>(50)</p></div>
                            </Button>
                            <Button variant="contained" color="primary" disabled={current.seventh}
                                style={{ margin: "5px", padding: "5px", background: "rgb(142 2 6 / 95%)" }}
                                onClick={() => {
                                    setCurrent({ ...current, seventh: true, running: "seventh" })
                                    handleList(50, "seventh")
                                }}
                            ><div><b>8.99 LAKH</b><p style={{ marginBottom: "0" }}>(50)</p></div>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div style={{ padding: "20px" }}>
                    {list.length === 0 ? <img src={loading} alt="none" style={{ height: "400px", width: "500px" }} /> :
                        <DataTable
                            title={
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "column" }}>
                                    <img src={congrats} alt="none" style={{ height: "60px", width: "350px", marginTop: "20px", marginLeft: "50px" }} />
                                    <b style={{ fontFamily: "Algerian", color: "brown", marginLeft: "50px" }}>
                                        {current.running === "first" ? "FIRST 10 LUCKY WINNERS" : ""}
                                        {current.running === "second" ? "FIRST 20 LUCKY WINNERS" : ""}
                                        {current.running === "third" ? "FIRST 30 LUCKY WINNERS" : ""}
                                        {current.running === "fourth" ? "FIRST 50 LUCKY WINNERS" : ""}
                                        {current.running === "fifth" ? "SECOND 50 LUCKY WINNERS" : ""}
                                        {current.running === "sixth" ? "THIRD 50 LUCKY WINNERS" : ""}
                                        {current.running === "seventh" ? "FOURTH 50 LUCKY WINNERS" : ""}
                                    </b>
                                </div>
                            }
                            columns={column1}
                            data={list}
                            pagination
                            paginationPerPage={10}
                            persistTableHead
                            customStyles={customStyles}
                            paginationRowsPerPageOptions={[10, 20, 25, 30]}
                        />
                    }
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "500px" }}>
                        <Button className="my-2" variant="contained" color="primary" onClick={exportXml}>Export to sheets</Button>
                        <Button classname="my-2" variant="contained" color="primary"
                            style={{ display: current.running === "seventh" ? "block" : "none" }}
                            onClick={handleWinner}>Go to Winners</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToprops = (state) => {
    return {
        customers: state.customers,
        winners: state.winners
    }
}

export default connect(mapStateToprops)(Home)