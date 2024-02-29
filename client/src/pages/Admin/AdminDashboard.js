import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <AdminMenu />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <div className="card p-3" data-bs-theme="dark">
              <h3> Name : {auth?.user?.name}</h3>
              <h3> Email : {auth?.user?.email}</h3>
              <h3> Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
