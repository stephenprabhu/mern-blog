import React from "react";

const PageSection = (props) => {
  return (
    <section className="ftco-section">
      <div className="container">
          {props.children}
      </div>
    </section>
  );
};

export default PageSection;
