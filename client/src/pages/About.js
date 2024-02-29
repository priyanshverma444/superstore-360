import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="d-flex flex-column card m-4 border shadow" data-bs-theme="dark" style={{height:"43rem"}}>
      <div className="row contactus">
        <div className="col-md-5 mt-4 d-flex justify-content-center">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-11 p-3 mb-4">
          <h1 className="d-flex justify-content-center">About Us</h1>
          <p className="text-justify mt-2">
            Welcome to Superstore-360! We are dedicated to providing you with a
            seamless and enjoyable shopping experience. We are committed to
            offering high-quality products, excellent customer service, and a
            user-friendly platform for all your shopping needs.
          </p>
          <p className="text-justify mt-2">
            We understand that your time is valuable, which is why we strive to
            make your shopping experience as convenient as possible. Whether
            you're looking for the latest fashion trends, home essentials, or
            unique gifts, we have a wide selection of products to meet your
            needs.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing Superstore-360, and we
            look forward to providing you with an exceptional shopping
            experience.
          </p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default About;
