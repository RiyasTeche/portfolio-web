import { Link, useLocation } from "react-router-dom";

const NavLink = ({ link }) => {
  const selectedLink = useLocation().pathname;
  return (
    <>
      <Link to={link.url} className={selectedLink == link.url ? "selected" : " "}>
        {link.title}
      </Link>
    </>
  );
};

export default NavLink;
