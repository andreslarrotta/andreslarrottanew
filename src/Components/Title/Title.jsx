import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

export const Title = ({ text }) => {
  return <h1>Hello Word, my first componente in Storybook - {text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "Hola mundo",
};
