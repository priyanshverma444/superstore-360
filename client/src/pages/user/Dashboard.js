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
            <div className="card w-75 p-3" data-bs-theme="dark">
              <h3>User name: {auth?.user?.name}</h3>
              <h3>User email: {auth?.user?.email}</h3>
              <h3>User address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
