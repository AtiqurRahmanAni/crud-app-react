import React from "react";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { useAuthContext } from "../contexts/AuthContext";

const Users = () => {
  const { handleError } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/users");
        const { data } = response;
        setUsers(data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container className="mt-4">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Username</th>
              <th>Display Name</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user._id}</td>
                    <td>{user.username}</td>
                    <td>{user.displayName}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Users;
