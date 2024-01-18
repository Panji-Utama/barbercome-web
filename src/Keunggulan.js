import React, { useState, useEffect } from "react";

const Keunggulan = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const checkScroll = () => {
    const section = document.getElementById("keunggulan");
    const sectionTop = section?.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight;

    if (sectionTop <= triggerPoint) {
      setShowHeader(true);
    }
  };

  const checkScrollDivs = () => {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const triggerPoint = window.innerHeight;

    const setVisibility = (element, setShow) => {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      if (top <= triggerPoint && bottom >= 0) {
        setShow(true);
      }
    };

    setVisibility(div1, setShowDiv1);
    setVisibility(div2, setShowDiv2);
    setVisibility(div3, setShowDiv3);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("scroll", checkScrollDivs);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("scroll", checkScrollDivs);
    };
  }, []);

  return (
    <div id="keunggulan" className="min-h-screen flex flex-col items-center">
      <div className="h-40 mt-10 text-center pt-10">
        <h2
          className={`text-secondColor font-poppins font-bold text-[40px] transition-transform duration-500 ease-out transform ${
            showHeader ? "scale-100" : "scale-0"
          }`}
        >
          Bagaimana kami memecahkan problem potong rambut
        </h2>
      </div>
      <div id="elementBox" className="flex flex-row">
        <div
          id="div1"
          className={`bg-accentColor mx-8 px-8 py-6 rounded-lg shadow-xl border-solid border-black justify-center items-center text-center transition-all duration-1000 ${
            showDiv1
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="font-poppins">Hey</h3>
          <p className="font-thin">Lorem</p>
        </div>
        <div
          id="div2"
          className={`bg-accentColor mx-8 px-8 py-6 rounded-lg shadow-xl border-solid border-black justify-center items-center text-center transition-all duration-1000 ${
            showDiv2
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <h3 className="font-poppins">Hey</h3>
          <p>Lorem</p>
        </div>
        <div
          id="div3"
          className={`bg-accentColor mx-8 px-8 py-6 rounded-lg shadow-xl border-solid border-black justify-center items-center text-center transition-all duration-1000 ${
            showDiv3
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h3 className="font-poppins">Hey</h3>
          <p>Lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
