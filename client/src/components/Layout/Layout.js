// import React, { useEffect } from "react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';

// const Layout = ({title,children}) => {

//   useEffect(() => {
//     document.title = title;
//     }, []);

//     return (
//         <div>
//           <Header/>
//           <main style={{minHeight: "70vh"}}>{children}</main>
//           <Footer/>
//         </div>
//     );
// };

// export default Layout;
const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}><Toaster/>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Superstore-360 - Shop now!",
  description: "Your one-stop shop for endless possibilities!",
  keywords: "ecommerce,shopping",
  author: "Priyansh Verma, Dhruv Jain, Pari, Harsh Kaushik, Shikhar Srivastava, Prashast Saxena"
};
export default Layout;
