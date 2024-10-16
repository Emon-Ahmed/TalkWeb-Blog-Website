import React, { useEffect, useState } from "react";
import { Alert, Form, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [manageAllOrders, setManageAllOrders] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const url = `https://talkweb-blog-website-server.onrender.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageAllOrders(data));
  }, []);

  const handleStatus = (id) => {
    fetch("https://talkweb-blog-website-server.onrender.com/users/admin", {
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
      fetch(`https://talkweb-blog-website-server.onrender.com/orders/${id}`, {
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

      <h3 className="my-3">Total Orders: {manageAllOrders.length}</h3>
      <Table striped bordered hover className="bg-white">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageAllOrders.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.userName} </td>
              <td>{row.email} </td>
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
