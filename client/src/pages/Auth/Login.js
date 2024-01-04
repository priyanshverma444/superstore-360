import React, {useState} from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import {useNavigate,useLocation} from "react-router-dom";
import toast from 'react-hot-toast';
import { useAuth } from "../../context/auth"

const Login = () => {
    const [email,setEmail] = useState("")
    const [newPassword,setnewPassword] = useState("")
    const [answer,setAnswer] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {email,password}
      );
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        });
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate(location.state || "/");
      }
      else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Superstore-360">
      <div className="register">
        <h1 className="title">Login Page</h1>
        <form onSubmit={handleSubmit}> 
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your favourite game"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter new password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login