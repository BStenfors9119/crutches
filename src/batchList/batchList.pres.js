import React from 'react';
import {Button, List, ListItem, ListItemText, ListSubheader} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useBatchListStyles} from "./batchList.styles";
import {useTheme} from "@material-ui/core/styles";

const BatchList = props => {
    const classes = useBatchListStyles();
    const theme = useTheme();
    const {batches} = props;

    let batchItems = '';
    if(batches !== null && batches.length > 0) {
        batchItems = batches.map((batch, idx) => {
            return (
                <TableRow key={idx}>
                    <TableCell component="th" scope="row">
                        {batch.client_id}
                    </TableCell>
                    <TableCell align="right">{batch.id}</TableCell>
                </TableRow>
            )
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Client ID</TableCell>
                        <TableCell align="right">Batch ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {batchItems}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BatchList;