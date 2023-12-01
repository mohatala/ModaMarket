import React, { useState } from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import "../Table/Table.css";

// Function to create customer data
function createData(name, email, phone) {
  return { name, email, phone };
}

const Customers = () => {
  const [customers, setCustomers] = useState([
    createData("Customer A", "customerA@example.com", "123-456-7890"),
    createData("Customer B", "customerB@example.com", "987-654-3210"),
    createData("Customer C", "customerC@example.com", "111-222-3333"),
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });

  const handleOpenDialog = (customer) => {
    setSelectedCustomer(customer);
    setNewCustomer(customer || { name: "", email: "", phone: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCustomer(null);
    setNewCustomer({ name: "", email: "", phone: "" });
  };

  const handleAddCustomer = () => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    handleCloseDialog();
  };

  const handleUpdateCustomer = () => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.name === selectedCustomer.name ? newCustomer : customer
      )
    );
    handleCloseDialog();
  };

  const handleDeleteCustomer = () => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.name !== selectedCustomer.name)
    );
    handleCloseDialog();
  };

  return (
    <div className="Customers">
      <h1>Customers</h1>
      <div className="Table">
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {customers.map((customer) => (
                <TableRow
                  key={customer.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {customer.name}
                  </TableCell>
                  <TableCell align="left">{customer.email}</TableCell>
                  <TableCell align="left">{customer.phone}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" onClick={() => handleOpenDialog(customer)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteCustomer(customer)}>
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
        <DialogTitle>{selectedCustomer ? "Edit Customer" : "Add New Customer"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Email"
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            fullWidth
          />
          <TextField
            label="Phone"
            value={newCustomer.phone}
            onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {selectedCustomer ? (
            <IconButton color="primary" onClick={handleUpdateCustomer}>
              <EditIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={handleAddCustomer}>
              <AddIcon />
            </IconButton>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Customers;
