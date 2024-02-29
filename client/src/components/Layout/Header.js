import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <Link to="/" className="navbar-brand">
          <img src="/images/superstore-360_logo.png" alt="" /> Superstore-360
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="container-fluid">
            <div className="navbar-collapse">
              <div className="ms-auto mb-1">
                <SearchInput />
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/categories" className="nav-link">
                    All Categories
                  </NavLink>
                </li>
                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        SignUp
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <div className="d-flex">
                    <NavLink to="/cart" className="nav-link">
                      Cart
                    </NavLink>
                    <Badge count={cart?.length} showZero></Badge>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="sec_nav_wrapper">
        <nav
          className="sec_nav navbar navbar-expand-lg bg-dark border-bottom border-body"
          data-bs-theme="dark"
        >
          <div class="navbar-nav">
            <div className="d-flex flex-row">
              {categories?.map((c) => (
                <div>
                  <Link
                    className="m-2 text-decoration-none text-white"
                    to={`/category/${c.slug}`}
                  >
                    {c.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
