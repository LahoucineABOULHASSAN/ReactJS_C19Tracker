import { Link } from "react-router-dom";
const Nav = () => {
  const isActive = (event) => {
    const navLinks = document.querySelectorAll(".link");
    console.log(navLinks);
    navLinks.forEach((elem) => {
      if (elem === event.target) {
        elem.classList.add("active");
      } else elem.classList.remove("active");
    });
  };
  return (
    <nav>
      <Link className="link active" to="/" onClick={isActive}>
        World Results
      </Link>
      <Link className="link" to="/countries" onClick={isActive}>
        Filter By Country
      </Link>
    </nav>
  );
};

export default Nav;
