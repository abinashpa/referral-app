import * as React from "react";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomizedTables = ({ list }) => {
  function formatDate(timestamp) {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {/* align center */}
            <StyledTableCell align="center">Referred By</StyledTableCell>
            <StyledTableCell align="center">Referred To</StyledTableCell>
            <StyledTableCell align="center">Invited At</StyledTableCell>
            <StyledTableCell align="center">Joined At</StyledTableCell>
            <StyledTableCell align="center">Message</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.referredBy}</StyledTableCell>
              <StyledTableCell align="center">{row.referredTo}</StyledTableCell>
              <StyledTableCell align="center">
                {formatDate(row.invitedAt)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {formatDate(row.joinedAt)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.message}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
