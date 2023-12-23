import React, { useState } from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "../Table/Table.css";

function createData(name, trackingId, date, status, user) {
  return { name, trackingId, date, status, user };
}

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const Orders = () => {
  const [rows, setRows] = useState([
    createData("Women's Plus Size Hooded Puffer Coat, Created for Macy's", 18908424, "2 oct 2023", "Approved", "Client 1"),
    createData("Women's Raglan-Sleeve Mock-Neck Sweatshirt", 18908424, "5 dec 2022", "Pending", "Client 2"),
    createData("Women's Long-Sleeve Faux-Wrap Midi Dress", 18908424, "20 jan 2022", "Delivered", "Client 3"),
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newOrder, setNewOrder] = useState({
    name: "",
    trackingId: "",
    date: "",
    status: "",
    user: "",
  });

  const handleOpenDialog = (order) => {
    setSelectedOrder(order);
    setNewOrder(order || { name: "", trackingId: "", date: "", status: "", user: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrder(null);
    setNewOrder({ name: "", trackingId: "", date: "", status: "", user: "" });
  };

  const handleAddOrder = () => {
    setRows((prevRows) => [...prevRows, newOrder]);
    handleCloseDialog();
  };

  const handleUpdateOrder = () => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.name === selectedOrder.name ? newOrder : row))
    );
    handleCloseDialog();
  };

  const handleDeleteOrder = () => {
    setRows((prevRows) => prevRows.filter((row) => row.name !== selectedOrder.name));
    handleCloseDialog();
  };

  return (
    <div className="Orders">
      <h1>Orders</h1>
      <div className="Table">
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">User</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left">{row.user}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" onClick={() => handleOpenDialog(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteOrder(row)}>
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
        <DialogTitle>{selectedOrder ? "Edit Order" : "Add New Order"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Product"
            value={newOrder.name}
            onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Tracking ID"
            value={newOrder.trackingId}
            onChange={(e) => setNewOrder({ ...newOrder, trackingId: e.target.value })}
            fullWidth
          />
          <TextField
            label="Date"
            value={newOrder.date}
            onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
            fullWidth
          />
          <TextField
            label="Status"
            value={newOrder.status}
            onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
            fullWidth
          />
          <TextField
            label="User"
            value={newOrder.user}
            onChange={(e) => setNewOrder({ ...newOrder, user: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {selectedOrder ? (
            <IconButton color="primary" onClick={handleUpdateOrder}>
              <EditIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={handleAddOrder}>
              <AddIcon />
            </IconButton>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Orders;
