// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./css/index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Navbar from "./Navbar";
// import Keunggulan from "./Keunggulan";
// import Footer from "./Footer";
// import Fitur from "./Fitur";
// import Testimoni from "./Testimoni";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Navbar />
//     <App />
//     <Keunggulan />
//     <Fitur />
//     <Testimoni />
//     <Footer />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Navbar";
import Keunggulan from "./Keunggulan";
import Footer from "./Footer";
import Fitur from "./Fitur";
import Testimoni from "./Testimoni";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Get the DOM elements for each section
      const keunggulanElement = document.getElementById("keunggulan");
      const fiturElement = document.getElementById("fitur");
      const testimoniElement = document.getElementById("testimoni");

      // Helper function to check if the top of the element is in view
      const isTopInView = (element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight;
        }
        return false;
      };

      // Update active section based on scroll position
      if (isTopInView(keunggulanElement)) {
        setActiveSection("keunggulan");
      } else if (isTopInView(fiturElement)) {
        setActiveSection("fitur");
      } else if (isTopInView(testimoniElement)) {
        setActiveSection("testimoni");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.StrictMode>
      <Navbar activeSection={activeSection} />
      <App />
      <Keunggulan />
      <Fitur />
      <Testimoni />
      <Footer />
    </React.StrictMode>
  );
};

root.render(<Main />);
reportWebVitals();
