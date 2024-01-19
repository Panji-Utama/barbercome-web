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
    <div
      id="keunggulan"
      className="flex min-h-screen flex-col items-center font-poppins"
    >
      <div className="mt-10 h-40 pt-10 text-center">
        <h2
          className={`transform text-[40px] font-bold text-secondColor transition-transform duration-500 ease-out ${
            showHeader ? "scale-100" : "scale-0"
          }`}
        >
          Bagaimana kami memecahkan problem potong rambut?
        </h2>
      </div>
      <div id="elementBox" className="flex flex-row">
        <div
          id="div1"
          className={`mx-8 flex flex-col items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showDiv1
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-secondColor">
            Sambil bersantai di rumah
          </h3>
          <img
            className="my-10 h-60 rounded-lg"
            src="https://akcdn.detik.net.id/community/media/visual/2020/10/31/manfaat-bersantai-sumber-freepikcom.jpeg?w=620&q=90"
            alt="Bersantai di rumah"
          />
          <p className="text-secondColor">
            Anda bisa mendapatkan sesi pencukuran rambut <br />
            tanpa repot-repot ke barbershop
          </p>
        </div>
        <div
          id="div2"
          className={`mx-8 items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showDiv2
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <h3 className="font-semibold">Layanan yang dapat dipercaya</h3>
          <p>
            Dengan barber kami yang ahli dan bersertifikasi,
            <br />
            anda tidak perlu ragu dengan pelayanan kami
          </p>
        </div>
        <div
          id="div3"
          className={`mx-8 items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showDiv3
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h3 className="f">Hey</h3>
          <p>Lorem</p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
