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

function createData(Img, Producto, FechaIni, FechaFin, Estado) {
    return { Img, Producto, FechaIni, FechaFin, Estado };
}

const rows = [
    createData(<img
        width="30%"
        height="30%"
        alt="advert"
        src="../assets/nvidia-geforce-rtx-3080.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
    />, 'NVIDIA Geforce RTX 3080', '1/04/2023', '3/04/2023', 'ENTREGADO'),
    createData(<img
        width="30%"
        height="30%"
        alt="advert"
        src="../assets/nvidia-geforce-rtx-3080.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
    />, 'NVIDIA Geforce RTX 3080', '1/04/2023', '3/04/2023', 'DEVUELTO'),
    createData(<img
        width="30%"
        height="30%"
        alt="advert"
        src="../assets/nvidia-geforce-rtx-3080.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
    />, 'NVIDIA Geforce RTX 3080', '1/04/2023', '3/04/2023', 'ENTREGADO'),
    createData(<img
        width="30%"
        height="30%"
        alt="advert"
        src="../assets/nvidia-geforce-rtx-3080.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
    />, 'NVIDIA Geforce RTX 3080', '1/04/2023', '3/04/2023', 'DEVUELTO'),
    createData(<img
        width="30%"
        height="30%"
        alt="advert"
        src="../assets/nvidia-geforce-rtx-3080.webp"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
    />, 'NVIDIA Geforce RTX 3080', '1/04/2023', '3/04/2023', 'ENTREGADO')
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
                                
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Typography color={dark} variant="h3" fontWeight="500">
                                Producto
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography color={dark} variant="h3" fontWeight="500">
                                Fecha de Solicitud
                            </Typography>
                        </StyledTableCell>
                       
                        <StyledTableCell align="right">
                            <Typography color={dark} variant="h3" fontWeight="500">
                                Fecha de Entrega
                            </Typography>
                        </StyledTableCell>

                        <StyledTableCell align="right">
                            <Typography color={dark} variant="h3" fontWeight="500">
                                Estado              </Typography>
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
                           
                            <StyledTableCell align="right">{row.FechaIni}</StyledTableCell>
                            <StyledTableCell align="right">{row.FechaFin}</StyledTableCell>
                            <StyledTableCell align="right">{row.Estado}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
