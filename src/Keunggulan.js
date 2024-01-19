import React, { useState, useEffect } from "react";

const Keunggulan = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);

  const checkScroll = () => {
    const section = document.getElementById("keunggulan");
    const sectionTop = section?.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight;

    if (sectionTop <= triggerPoint) {
      setShowHeader(true);
    }
  };

  const checkScrollDivs = () => {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const triggerPoint = window.innerHeight;

    const setVisibility = (element, setShow) => {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      if (top <= triggerPoint && bottom >= 0) {
        setShow(true);
      }
    };

    setVisibility(card1, setShowCard1);
    setVisibility(card2, setShowCard2);
    setVisibility(card3, setShowCard3);
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
      className="flex h-[100vh] min-h-screen flex-col items-center font-poppins"
    >
      <div className="mt-20 h-40 pt-10 text-center">
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
          id="card1"
          className={`mx-8 flex flex-col items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showCard1
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-secondColor">
            Menghemat <br />
            energi
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
          id="card2"
          className={`mx-8 flex flex-col items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showCard2
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-secondColor">
            Layanan yang <br /> dapat dipercaya
          </h3>
          <img
            className="my-10 h-60 rounded-lg"
            src="https://heygoldie.com/blog/wp-content/uploads/2021/12/barbershop-terminology-1.jpg"
            alt="Bersantai di rumah"
          />
          <p>
            Dengan barber kami yang ahli dan bersertifikasi,
            <br />
            anda tidak perlu ragu dengan pelayanan kami
          </p>
        </div>
        <div
          id="card3"
          className={`mx-8 flex flex-col items-center justify-center rounded-lg border-solid border-black bg-accentColor px-8 py-6 text-center shadow-xl transition-all duration-1000 ${
            showCard3
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h3 className="text-xl font-semibold text-secondColor">
            Dapat beraktivitas <br />
            seperti biasa
          </h3>
          <img
            className="my-10 h-60 rounded-lg"
            src="https://www.verywellmind.com/thmb/9Ce-llfVBbgCBF0ge8ViujKJp7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1319764461-1364e877165546a29e4d3815101d7e72.jpg"
            alt="Bersantai di rumah"
          />
          <p>Sambil menunggu,<br /> anda dapat melakukan apapun yang anda mau</p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
