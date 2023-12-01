import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "../Table/Table.css";

// Function to create product data
function createData(name, category, price) {
  return { name, category, price };
}

const Products = () => {
  const [products, setProducts] = useState([
    createData("Product A", "Category A", "$100"),
    createData("Product B", "Category B", "$150"),
    createData("Product C", "Category C", "$120"),
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setNewProduct(product || { name: "", category: "", price: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
    setNewProduct({ name: "", category: "", price: "" });
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    handleCloseDialog();
  };

  const handleUpdateProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.name === selectedProduct.name ? newProduct : product))
    );
    handleCloseDialog();
  };

  const handleDeleteProduct = () => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.name !== selectedProduct.name));
    handleCloseDialog();
  };

  return (
    <div className="Products">
      <h1>Products</h1>
      <div className="Table">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog(null)}
        >
          Add Product
        </Button>
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {products.map((product) => (
                <TableRow
                  key={product.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="left">{product.category}</TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" onClick={() => handleOpenDialog(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteProduct(product)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            fullWidth
          />
          <TextField
            label="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {selectedProduct ? (
            <IconButton color="primary" onClick={handleUpdateProduct}>
              <EditIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={handleAddProduct}>
              <AddIcon />
            </IconButton>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Products;
