import barbercome from "./assets/img/BARBERCOME-cropped.png";

const Navbar = ({ activeSection }) => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-10 flex justify-between items-center bg-firstColor shadow-xl">
      <img src={barbercome} alt="" className="h-20 ml-20" />
      <ul className="mr-20 flex">
        <li
          className={`mx-6 my-4 p-2 text-white ${
            activeSection === "keunggulan" ? "bg-[#32727a]" : ""
          } border-solid rounded-md border-2 border-firstColor hover:scale-110 hover:text-[#d2faff] transition ease-in duration-100`}
          onClick={(e) => scrollToSection(e, "keunggulan")}
        >
          <a href="#keunggulan">Keunggulan</a>
        </li>
        <li
          className={`mx-6 my-4 p-2 text-white ${
            activeSection === "fitur" ? "bg-[#32727a]" : ""
          } border-solid rounded-md border-2 border-firstColor hover:scale-110 hover:text-[#d2faff] transition ease-in duration-100`}
          onClick={(e) => scrollToSection(e, "fitur")}
        >
          <a href="#fitur">Fitur</a>
        </li>
        <li
          className={`mx-6 my-4 p-2 text-white ${
            activeSection === "testimoni" ? "bg-[#32727a]" : ""
          } border-solid rounded-md border-2 border-firstColor hover:scale-110 hover:text-[#d2faff] transition ease-in duration-100`}
          onClick={(e) => scrollToSection(e, "testimoni")}
        >
          <a href="#testimoni">Testimoni</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
