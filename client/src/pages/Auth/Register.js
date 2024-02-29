import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Superstore-360">
      <div
        className="register m-auto mt-4 mb-4 card"
        data-bs-theme="dark"
        style={{ width: "25rem", height: "40rem" }}
      >
        <form onSubmit={handleSubmit} data-bs-theme="dark">
        <div className="d-flex justify-content-center mb-2">
        <img src="images/superstore-360_logo.png" height="100px" width="100px" alt="" />
        </div>
        <h2>SignUp - Superstore-360</h2>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter your name"
              required
            />
          </div>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              maxlength="10" 
              pattern="\d{10}" 
              title="Please enter exactly 10 digits"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone1"
              placeholder="Enter your phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputGame1"
              placeholder="Enter your favourite game"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-danger w-50">
              SignUp
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <NavLink to="/login" className="nav-link">
            <button className="btn btn-danger w-75">
              Already a user? Login here!
            </button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
