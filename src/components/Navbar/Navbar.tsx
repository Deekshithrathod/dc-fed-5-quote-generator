import "./Navbar.css";

const Navbar = () => {
  const handleClick = () => {
    console.log(`get random quote`);

    // change the quote State
  };
  return (
    <nav onClick={() => handleClick()}>
      random <span className="material-symbols-outlined">autorenew</span>
    </nav>
  );
};

export default Navbar;
