import React from "react";
import PropTypes from "prop-types";
import "./Heading.css";

/**
 * El Componente de Button tiene la funcion de adaptarse de acuerdo a las dimenciones.
 */

export const Heading = ({ type, text }) => {
  switch (type) {
    case "h1":
      return <h1 className={`andreslarrotta-heading--${type}`}>{text}</h1>;
    case "h2":
      return <h2 className={`andreslarrotta-heading--${type}`}>{text}</h2>;
    case "h3":
      return <h3 className={`andreslarrotta-heading--${type}`}>{text}</h3>;
    case "h4":
      return <h4 className={`andreslarrotta-heading--${type}`}>{text}</h4>;
    case "h5":
      return <h5 className={`andreslarrotta-heading--${type}`}>{text}</h5>;
    case "h6":
      return <h6 className={`andreslarrotta-heading--${type}`}>{text}</h6>;
    case "paragraph":
      return <p className={`andreslarrotta-heading--${type}`}>{text}</p>;
    default:
      return <></>;
  }
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "paragraph"]),
};

Heading.defaultProps = {
  type: "h1",
  text: "",
};
