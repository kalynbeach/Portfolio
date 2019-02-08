import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact</h2>
    <span>
      Let&apos;s talk. Feel free to reach out to me via{" "}
      <a href="mailto:kalynbeach@gmail.com">email</a>.
    </span>
  </Layout>
);

export default ContactPage;
