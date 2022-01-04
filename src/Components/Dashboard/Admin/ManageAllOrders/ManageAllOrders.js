import React, { useEffect, useState } from "react";
import { Alert, Form, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [manageAllOrders, setManageAllOrders] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageAllOrders(data));
  }, []);

  const handleStatus = (id) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to Delete Order?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Order");
            const remaining = manageAllOrders.filter((row) => row._id !== id);
            setManageAllOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="container">
      {success && <Alert severity="success">Make Admin Successfully</Alert>}

      <h1>Total Orders: {manageAllOrders.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageAllOrders.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.userName} </td>
              <td>{row.email} </td>
              <td>{row.phone} </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
