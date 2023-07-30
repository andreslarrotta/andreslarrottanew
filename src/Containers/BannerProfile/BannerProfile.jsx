import React from "react";
import PropTypes from "prop-types";
import { PhotoProfile } from "../../Components/PhotoProfile/PhotoProfile";
import "./BannerProfile.css";

/**
 * El componente de foto de perfil
 */

export const BannerProfile = ({ src }) => {
  return (
    <div className="banner-profile">
      <div className="banner-profile--portada"></div>
      <div className="banner-profile--photo">
        <PhotoProfile src={src} />
      </div>
    </div>
  );
};

BannerProfile.propTypes = {
  src: PropTypes.string,
};

BannerProfile.defaultProps = {
  src: "",
};
