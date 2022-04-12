import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { TabPanel, MuiTabs } from "../../components/mui";
import { Col } from "../../components/xbl";

function createData(name, password, created, purpose) {
    return {
        name,
        password,
        created,
        purpose,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}



export default function Credentials() {
    const tabs = [
        "Emails",
        "products"
    ];


    const [tab, setTab] = useState(0);

    const rows = [
        createData('hi@grocered.in', "sd8fuhd8sf435", "22 Feb 2020", "Universal"),
        createData('outreach@grocered.in', "54gretgert", "22 Feb 2020", "Customer support"),
        createData('product@grocered.in', "56fuhd8sf435", "22 Feb 2020", "Products"),
        createData('care@grocered.in', "ret3453345", "22 Feb 2020", "Support"),
        createData('career@grocered.in', "ertfuhd8sf435", "22 Feb 2020", "Job")
    ];

    return (
        <div className="p1">
            <div>
                <div className="ps t0 z10 bg ">
                    <MuiTabs
                        tabs={tabs}
                        value={tab}
                        setValue={setTab}
                    />
                </div>
                <TabPanel value={tab} index={0} className="card">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Created</TableCell>
                                    <TableCell>purpose</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, i) => <Row key={i} row={row} />)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                <TabPanel value={tab} index={1} className="card mt1">

                </TabPanel>

            </div>
        </div>
    )
}





function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>{row.created}</TableCell>
                <TableCell>{row.purpose}</TableCell>
                <TableCell align="right">
                    <IconButton
                        aria-label="expand row"
                        className="small ic40"
                        onClick={() => setOpen(!open)}
                    >
                        <span className={`ix-arrow ic ic40 f07 tr4 ${open ? "rot180" : ""}`} />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}