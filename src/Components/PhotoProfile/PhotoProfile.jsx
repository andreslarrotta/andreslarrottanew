import React from "react";
import PropTypes from "prop-types";
import "./PhotoProfile.css";
import photoProfile from "../../assets/PhotoProfile.png";
/**
 * El componente de foto de perfil
 */

export const PhotoProfile = ({ src }) => {
  return (
    <img
      className="photo-profile"
      src={src ? src : photoProfile}
      alt="andres larrotta"
    />
  );
};

PhotoProfile.propTypes = {
  src: PropTypes.string,
};

PhotoProfile.defaultProps = {
  src: "",
};
