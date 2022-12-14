import React from "react";
import "./commonSection.scss";
import IconDesign from "../../assets/icons/001.svg";
import IconDesign2 from "../../assets/icons/002.svg";
import IconDesign3 from "../../assets/icons/003.svg";
import IconDesign4 from "../../assets/icons/005.svg";
import IconDesign6 from "../../assets/icons/006.svg";
export default function CommonSection() {
  return (
    <div>
      <div className="common-section-content-all-alignment">
        <div className="container-lg-5">
          <div className="grid">
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <img src={IconDesign} alt="IconDesign" />
                </div>
                <div className="sub-grid-items">
                  <p>Mittelverwendungs- kontrolle</p>
                  <span>bei Ein- und Aus- zahlungen</span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <img src={IconDesign2} alt="IconDesign2" />
                </div>
                <div className="sub-grid-items">
                  <p>100% versicherte Ware</p>
                  <span>mit All-Risk-Deckung</span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <img src={IconDesign3} alt="IconDesign3" />
                </div>
                <div className="sub-grid-items">
                  <p>Optimierte Anlagestrategie</p>
                  <span>Drei-Speichen-Regel in Edelmetalle</span>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <img src={IconDesign4} alt="IconDesign4" />
                </div>
                <div className="sub-grid-items">
                  <p>24/7 Sicherheit</p>
                  <span>Hochsicherheit- Zollfreilager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
