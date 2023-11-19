import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Superstore-360! We are dedicated to providing you
            with a seamless and enjoyable shopping experience. Our team is
            committed to offering high-quality products, excellent customer
            service, and a user-friendly platform for all your shopping needs.
          </p>
          <p className="text-justify mt-2">
            We understand that your time is valuable,
            which is why we strive to make your shopping experience as
            convenient as possible. Whether you're looking for the latest
            fashion trends, home essentials, or unique gifts, we have a wide
            selection of products to meet your needs.
          </p>
          {/* <p className="text-justify mt-2">
            Our customer service team is here to assist you with any questions
            or concerns you may have. Whether you need help placing an order,
            tracking your shipment, or providing feedback, we're here to help.
            You can reach out to us via email, phone, or the contact form on our
            website. 
          </p>
          <p className="text-justify mt-2">
            We value your business and are grateful for the opportunity
            to serve you. Thank you for choosing Superstore-360, and we
            look forward to providing you with an exceptional shopping
            experience.
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
