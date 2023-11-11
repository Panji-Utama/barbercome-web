const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-700">
      <img
        src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
        alt=""
        className="h-10 w-12 mx-4"
      />
      <ul className="mr-4 flex">
        <li className="px-8 py-4 text-white">Test</li>
        <li className="px-8 py-4 text-white">Test</li>
        <li className="px-8 py-4 text-white">Test</li>
      </ul>
    </nav>
  );
};

export default Navbar;
