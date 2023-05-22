import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, useTheme } from "@mui/material";
import Deleteicon from "components/Deleteicon";
import SelectCantidad from "components/SelectCantidad";
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

export default function CustomizedTables() {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const token = useSelector((state) => state.token);
  const [prodsCar, setProdsCar] = useState(null);
  var prodsCarComp = [];
  //const [itemsCar, setItemsCar] = useState(null);
  
  useEffect(() => {
    const getItemsCar = async () => {
      const getItemsCarRes = await fetch("http://localhost:8080/carts/get",
      //const getItemsCarRes = await fetch("https://fakestoreapi.com/products?limit=6",
        {
          method: "GET",
          headers: { xtkn: token },
        }
      );
  
      const itemsCar = await getItemsCarRes.json();
      if (itemsCar) {
        console.log(itemsCar);
        setProdsCar(itemsCar);
      }
    };

    getItemsCar().catch(console.error);
  }, [token]); 

  const delItemfromCar = async (productID, cartID) => {
    const formData = new FormData();
    formData.append("cartId", cartID);
    
    const deleteWLRes = await fetch("http://localhost:8080/carts/delete",
        {
            method: "DELETE",
            headers: { xtkn: token },
            body: formData,
        }
    );

    const deleteWL = await deleteWLRes.json();
    if (deleteWL){
        console.log("Producto elimnado del carrito: " + productID);
    } else {
      console.log("No existe endpoint para eliminar producto del carrito.");
    }
};

  if (prodsCar) {
    prodsCar.carts.forEach(e => {
      prodsCarComp.push(
        <StyledTableRow key={e._id}>
              <StyledTableCell>
              <img width="30%" height="30%" alt="advert" src={e.product_img} style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}/>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {e.product_id.product_name}
              </StyledTableCell>
              <StyledTableCell align="right"> <SelectCantidad> <Select>value={1}</Select> </SelectCantidad> </StyledTableCell>
              <StyledTableCell align="right"> ${e.product_id.product_price} </StyledTableCell>
              <StyledTableCell align="right" onClick={()=>delItemfromCar(e.product_id._id, e._id)}> <Deleteicon /> </StyledTableCell>
            </StyledTableRow>
      );
    });
  }

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
                
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prodsCarComp}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
