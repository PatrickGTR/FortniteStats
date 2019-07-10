// --
// Main
// --
import React from "react";

// --
// Style
// --
import "react-bulma-components/dist/react-bulma-components.min.css";

// --
// Body
// --
import HeadContent from "../components/headContent";
import FooterContent from "../components/footerContent";
import NavContent from "../components/navContent";

const PageLayout = ({ children }) => {
  return (
    <>
      <HeadContent />
      <section className="section">
        <div className="container">
          {children}
          <nav className="has-text-centered" style={{ margin: "20px" }}>
            <NavContent />
          </nav>
        </div>
      </section>
      <FooterContent />
    </>
  );
};

export default PageLayout;
