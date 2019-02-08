import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/about.module.scss";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>A little about me.</h2>
    <span>
      I like to build stuff on computers. These days I primarily focus on front
      end web development, but I&#39;m no stranger to the back end. I&#39;ve
      been working as a Software Engineer for Leaf Group in Santa Monica, CA
      since 2015.
    </span>
    <div className={styles.skillsTable}>
      <div>
        <h4>Languages</h4>
        <ul>
          <li>TypeScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <h4>Frameworks</h4>
        <ul>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h4>Tools / Other</h4>
        <ul>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Webpack</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
