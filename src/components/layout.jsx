import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/layout.module.scss";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className={styles.container}>
        <Nav />
        <div className={styles.page}>{children}</div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
