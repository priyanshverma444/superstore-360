import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center footer_cpyrght">
        &copy; superstore360.vercel.app
      </h4>
      <p className="text-center mt-3">
        <Link to="/about" className="footer_links">
          About
        </Link>
        |
        <Link to="/contact" className="footer_links">
          Contact
        </Link>
        |
        <Link to="/policy" className="footer_links">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
