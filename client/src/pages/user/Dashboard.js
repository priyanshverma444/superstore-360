import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Superstore-360"}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <UserMenu />
          </div>
          <div className="col-md-9 d-flex justify-content-center">
            <div className="text-center w-100 card p-3" data-bs-theme="dark">
              <div className="card mb-4">
                <h3 className="card p-2 bg-danger">User name:</h3>
                <h3>{auth?.user?.name}</h3>
              </div>
              <div className="card mb-4">
                <h3 className="card p-2 bg-danger">User email:</h3>
                <h3>{auth?.user?.email}</h3>
              </div>
              <div className="card mb-4">
                <h3 className="card p-2 bg-danger">User contact:</h3>
                <h3>{auth?.user?.phone}</h3>
              </div>
              <div className="card">
                <h3 className="card p-2 bg-danger">User address:</h3>
                <h3>{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
