import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center mt-4">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `${values?.results.length} results found`}
          </h6>
          <div className="d-flex flex-wrap justify-content-center align-items-center mt-4 mb-4">
            {values?.results.map((p) => (
              <div
                className="card m-2"
                style={{ width: "18rem", height: "27rem" }}
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="p_img card-img-top"
                  width="300px"
                  height="200px"
                  alt={p.name}
                />
                <div className="card-body position-absolute bottom-0">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> ₹ {p.price}</p>
                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-dark ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item added to cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
