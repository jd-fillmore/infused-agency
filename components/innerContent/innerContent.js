import React from "react";
import Fade from "react-reveal/Fade";

const InnerContent = (props) => {
  return (
    <>
      <section className="inner-content">{props.children}</section>
    </>
  );
};

export default InnerContent;
