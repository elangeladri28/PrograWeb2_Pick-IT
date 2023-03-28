import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, useTheme, Box } from "@mui/material";
import Deleteicon from "components/Deleteicon";
import SelectCantidad from "components/SelectCantidad";
import Select from '@mui/material/Select';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Img, Producto, Cantidad, Precio, Estado) {
  return { Img, Producto, Cantidad, Precio, Estado };
}

const rows = [
  createData( <img
    width="30%"
    height="30%"
    alt="advert"
    src="../assets/nvidia-geforce-rtx-3080.webp"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />, 'NVIDIA Geforce RTX 3080', <SelectCantidad><Select>value={2}</Select></SelectCantidad>, 100, <Deleteicon/>),
  createData(<img
    width="30%"
    height="30%"
    alt="advert"
    src="../assets/nvidia-geforce-rtx-3080.webp"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />, 'NVIDIA Geforce RTX 3080', <SelectCantidad/>, 200, <Deleteicon/>),
  createData(<img
    width="30%"
    height="30%"
    alt="advert"
    src="../assets/nvidia-geforce-rtx-3080.webp"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />, 'NVIDIA Geforce RTX 3080', <SelectCantidad/>, 200, <Deleteicon/>),
  createData(<img
    width="30%"
    height="30%"
    alt="advert"
    src="../assets/nvidia-geforce-rtx-3080.webp"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />, 'NVIDIA Geforce RTX 3080', <SelectCantidad/>, 100, <Deleteicon/>),
  createData(<img
    width="30%"
    height="30%"
    alt="advert"
    src="../assets/nvidia-geforce-rtx-3080.webp"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />, 'NVIDIA Geforce RTX 3080', <SelectCantidad/>, 500, <Deleteicon/>)
];

export default function CustomizedTables() {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              <Typography color={dark} variant="h3" fontWeight="500">
                Imagen
              </Typography>
            </StyledTableCell>
            <StyledTableCell>
              <Typography color={dark} variant="h3" fontWeight="500">
                Producto
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="right">
              <Typography color={dark} variant="h3" fontWeight="500">
                Cantidad
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="right">
              <Typography color={dark} variant="h3" fontWeight="500">
                Precio
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="right">
              <Typography color={dark} variant="h3" fontWeight="500">
                ¿Mantener?
              </Typography>
            </StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Producto}>
              <StyledTableCell>
                {row.Img}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.Producto}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Cantidad}</StyledTableCell>
              <StyledTableCell align="right">{row.Precio}</StyledTableCell>
              <StyledTableCell align="right">{row.Estado}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
