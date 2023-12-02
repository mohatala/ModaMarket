import React, { useState, useEffect  } from "react";
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
function createData(name_Product, id_Categorie, price_product) {
  return { name_Product, id_Categorie, price_product };
}

const Products = () => {
  /*const [products, setProducts] = useState([
    createData("Product A", "Category A", "$100"),
    createData("Product B", "Category B", "$150"),
    createData("Product C", "Category C", "$120"),
  ]);*/
  const url = "https://www.talaini.tech/api/v1/products";
    const [products, setProducts] = useState([]);

    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setProducts(d))
    }


    useEffect(() => {
      fetchInfo();
    }, []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({ id_Product:0, name_Product: "", id_Categorie: "", price_product: "" });

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setNewProduct(product || { name_Product: "", id_Categorie: "", price_product: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
    setNewProduct({ id_Product:0, name_Product: "", id_Categorie: "", price_product: "" });
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    // Send data to the backend via POST
    fetch('https://www.talaini.tech/api/v1/products', {

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newProduct)
    })
    handleCloseDialog();
  };

  const handleUpdateProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.name_Product === selectedProduct.name_Product ? newProduct : product))
    );
    handleCloseDialog();
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id_Product !== selectedProduct.id_Product));
    fetch('https://www.talaini.tech/api/v1/products/'+id, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setProducts(values => {
          return values.filter(item => item.id !== id)
        })
      })
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
                  key={product.id_Product}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name_Product}
                  </TableCell>
                  <TableCell align="left">{product.id_Categorie}</TableCell>
                  <TableCell align="left">{product.price_product}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" onClick={() => handleOpenDialog(product)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteProduct(product.id_Product)}>
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
          label="Product id"
          value={newProduct.id_Product}
          onChange={(e) => setNewProduct({ ...newProduct, id_Product: e.target.value })}
          fullWidth
        />
          <TextField
            label="Product Name"
            value={newProduct.name_Product}
            onChange={(e) => setNewProduct({ ...newProduct, name_Product: e.target.value })}
            fullWidth
          />
          <TextField
            label="Category"
            value={newProduct.id_Categorie}
            onChange={(e) => setNewProduct({ ...newProduct, id_Categorie: e.target.value })}
            fullWidth
          />
          <TextField
            label="Price"
            value={newProduct.price_product}
            onChange={(e) => setNewProduct({ ...newProduct, price_product: e.target.value })}
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
