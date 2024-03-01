import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="m-4">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 gx-3 gy-3" key={c._id}>
              <Link
                to={`/category/${c.slug}`}
                className="categories_button btn-dark btn text-white"
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
