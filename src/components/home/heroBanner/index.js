import React from "react";
import "./heroBanner.scss";
import XmldIcon from "../../../assets/icons/xmld.svg";
import XmldIconMobile from "../../../assets/icons/xmld-mobile.svg";
export default function HeroBanner() {
  return (
    <div>
      <div className="hero-banner">
        <div className="container-lg-2">
          <div className="mobile-icon-bottom-alignment">
            <img src={XmldIconMobile} alt="XmldIconMobile" />
          </div>
          <div className="relative">
            <div className="text-style">
              <h1>
                »Entdecken Sie mit uns Ihre <span>Möglichkeiten</span> und
                entfalten das volle <span>Potential</span>.«
              </h1>
            </div>
            <div className="icon-bottom-alignment">
              <img src={XmldIcon} alt="XmldIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
