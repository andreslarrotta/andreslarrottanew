import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { Icons } from "../Icons/Icons";

/**
 * El Componente de Button tiene la funcion de adaptarse de acuerdo a las dimenciones.
 */

export const Button = ({ label, primary, icon, iconName, size }) => {
  const mode = primary
    ? "andreslarrotta-button--primary"
    : "andreslarrotta-button--secondary";
  return (
    <button
      type="button"
      className={`andreslarrotta-button ${mode} andreslarrotta-button--${size}`}
    >
      {icon ? <Icons name={iconName} /> : label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  icon: PropTypes.bool,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  size: PropTypes.oneOf(["content", "normal", "fullwight"]),
};

Button.defaultProps = {
  primary: true,
  icon: false,
  iconName: "",
  size: "normal",
};
