import barbercome from "./assets/img/BARBERCOME.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-firstColor">
      <img src={barbercome} alt="" className="h-20 w-20 mx-4" />
      <ul className="mr-4 flex">
        <li className="mx-6 my-4 text-white border-solid border-2 border-firstColor hover:border-b-slate-200 transition ease-in duration-200">
          <p className="text-white">Lorem</p>
        </li>
        <li className="mx-6 my-4 text-white border-solid border-2 border-firstColor hover:border-b-slate-200 transition ease-in duration-200">
          Test
        </li>
        <li className="mx-6 my-4 text-white border-solid border-2 border-firstColor hover:border-b-slate-200 transition ease-in duration-200">
          Test
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
