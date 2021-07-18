import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component';

const useStyles = makeStyles((theme) => ({
    text_shadow: {
        textShadow: "2px 2px 4px #000000",
        fontSize: "40px",
        color: "white"
    },
    table: {
        maxWidth: 250,
    },
    box_shadow: {
        boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to right, #c31432, #240b36)",
        margin: "20px"
    }
})
)

const Winners = (props) => {
    const classes = useStyles()
    const [winners, setWinners] = React.useState([])
    const column = [
        {
            name: 'S.No.',
            selector: 'serial',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.serial_number}</h6>,
        },
        {
            name: 'Customer Code',
            selector: 'customer_code',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem", width: "100px" }}>{row.CUSTOMER_CODE}</h6>,
        },
        {
            name: 'Name',
            selector: 'name',
            cell: row => <h6 style={{ color: "white", textShadow: "2px 2px 4px #000000", fontSize: ".7rem" }}>{row.CUSTOMER_NAME}</h6>,
        },
    ]

    React.useEffect(() => {
        var win = sessionStorage.getItem("winners")
        if (win !== null) {
            setWinners(JSON.parse(win))
        } else {
            setWinners(props.winners)
        }
    }, [])

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


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <h1 className={classes.text_shadow}>CONGRATS TO ALL WINNERS</h1>
            <div className={classes.container}>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>FIRST 10 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.first_ten}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>FIRST 20 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.second_twenty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>FIRST 30 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.third_thirty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>

            </div>
            <div className={classes.container}>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>FIRST 50 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.fourth_fifty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>SECOND 50 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.fifth_fifty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>THIRD 50 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.sixth_fifty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>

            </div>
            <div>
                <div>
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
                                    textShadow: "2px 2px 4px #000000", fontFamily: "Algerian"
                                }}>FOURTH 50 LUCKY WINNERS</h5>
                            </div>}
                        columns={column}
                        data={winners.seventh_fifty}
                        pagination
                        paginationPerPage={10}
                        persistTableHead
                        customStyles={customStyles}
                        paginationRowsPerPageOptions={[10, 20, 25, 30]}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToprops = (state) => {
    return {
        winners: state.winners
    }
}

export default connect(mapStateToprops)(Winners);