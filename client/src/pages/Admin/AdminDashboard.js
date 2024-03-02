import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin Dashboard : Superstore-360"}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <AdminMenu />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <div className="text-center w-100 card p-3" data-bs-theme="dark">
              <div className="card mb-4">
                <h3 className="card p-2 bg-danger">Admin name:</h3>
                <h3 className="p-1">{auth?.user?.name}</h3>
              </div>
              <div className="card mb-4">
                <h3 className="card p-2 bg-danger">Admin email:</h3>
                <h3 className="p-1">{auth?.user?.email}</h3>
              </div>
              <div className="card">
                <h3 className="card p-2 bg-danger">Admin contact:</h3>
                <h3 className="p-1">{auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
