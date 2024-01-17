import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title="Contact us">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          We're here to help you with any questions or concerns you may have. Whether you need assistance with placing an order, tracking your shipment, we're here to assist you. Please feel free to reach out to us via email, phone, or the contact form below. Our customer service team is dedicated to providing you with the best shopping experience possible. Thank you for choosing Superstore-360, and we look forward to serving you!
          </p>
          <p className="mt-3">
            <BiMailSend /> : verma.priyansh444@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +919319769885
          </p>
          {/* <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
