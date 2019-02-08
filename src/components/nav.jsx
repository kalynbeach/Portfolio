import { Link } from "gatsby";
import React from "react";
import styles from "../styles/nav.module.scss";

const Nav = () => {
  const navLinkActiveStyles = {
    textDecoration: "underline",
    textDecorationColor: "#f92300"
  };

  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link to="/">
          <h1>Kalyn Beach</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link to="/about/" activeStyle={navLinkActiveStyles}>
              About
            </Link>
          </li>
          <li>
            <Link to="/work/" activeStyle={navLinkActiveStyles}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={navLinkActiveStyles}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
