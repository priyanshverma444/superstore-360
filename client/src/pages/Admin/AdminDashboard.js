import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth();  
  return (
    <Layout>
    <div class="container-fluid m-3 p-3">
        <div class="row">
            <div class="col-md-3"><AdminMenu/></div>
            <div class="col-md-9">
            <div class="card w-75 p-3">
                <h3>Admin Name : {auth?.user?.name}</h3>
                <h3>Admin email : {auth?.user?.email}</h3>
                <h3>Admin contact : {auth?.user?.phone}</h3>
            </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default AdminDashboard