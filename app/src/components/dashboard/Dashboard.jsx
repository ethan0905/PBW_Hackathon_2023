import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './data.json'

const address = "A88VynukGdyJ6tjisFMNxPFw4mbGSJGtAaPoXZcyJgyH"

  
  export default function SortedTable() {
    const [rowData, setRowData] = useState(data);
    const [orderDirection, setOrderDirection] = useState("asc");
  
    const sortArray = (arr, orderBy) => {
      switch (orderBy) {
        case "asc":
        default:
          return arr.sort((a, b) =>
            a.account.amount > b.account.amount ? 1 : b.account.amount > a.account.amount ? -1 : 0
          );
        case "desc":
          return arr.sort((a, b) =>
            a.account.amount < b.account.amount ? 1 : b.account.amount < a.account.amount ? -1 : 0
          );
      }
    };
  
    const handleSortRequest = () => {
      setRowData(sortArray(data, orderDirection));
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">publicKey</TableCell>
              <TableCell align="center">Wallet</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center" onClick={handleSortRequest}>
                <TableSortLabel active={true} direction={orderDirection}>Amount ($)</TableSortLabel>
              </TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((x) => (
              <TableRow key={x.publicKey}>
                <TableCell component="th" scope="row" align="center">{x.publicKey}</TableCell>
                <TableCell align="center">{address === x.account.sender ? x.account.receiver : x.account.sender}</TableCell>
                <TableCell align="center">{x.account.statusSender + x.account.statusReceiver === 2 ? "In Progress" : x.account.statusSender + x.account.statusReceiver === 3 ? "Pending" : "Completed"}</TableCell>
                <TableCell align="center">{x.account.amount}</TableCell>
                <TableCell align="center">{"17/03/23"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }