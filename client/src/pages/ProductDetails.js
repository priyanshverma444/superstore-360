import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row card m-4 p-4 d-flex flex-row justify-content-center border shadow flex-wrap">
        <div className="col-md-5 m-4 card border shadow">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="p_img card-img-top"
            alt={product.name}
            height="300"
            width="350px"
          />
        </div>
        <div className="col-md-6 m-4 card border shadow">
          <h1 className="text-center mt-4">Product Details</h1>
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Price : {product.price}</h6>
          <h6>Category : {product?.category?.name}</h6>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark mb-4 w-75"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added to cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid row mt-3 mx-auto">
        <h1 className="d-flex justify-content-center">Similar Products</h1>
        {relatedProducts.length < 1 && (
          <p className="text-center d-flex justify-content-center">
            No similar products found
          </p>
        )}
        <div className="d-flex flex-wrap position-relative justify-content-center">
          {relatedProducts?.map((p) => (
            <div
              className="card m-1 mb-4 border shadow"
              style={{ width: "18rem", height: "27rem" }}
            >
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                className="p_img card-img-top"
                width="300px"
                height="200px"
                alt={p.name}
              />
              <div className="card-body position-absolute bottom-0">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
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
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                    toast.success("Item Added to cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
