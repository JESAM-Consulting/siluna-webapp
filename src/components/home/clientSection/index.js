import React, { useState } from "react";
import "./clientSection.scss";
import ProfileImage from "../../../assets/images/profile.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function ClientSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="client-section-content-alignment">
        <div className="container-md-new">
          <div className="grid">
            <div className="grid-items">
              <h1>
                {" "}
                Die Drei-Speichen-Regel (1/3 in Edelmetallen) ist seit 1.600
                Jahren die einzige Anlagestrategie, die noch nie versagt hat.
              </h1>
              <p>
                Prof. Dr. Hans J. Bocker - <span>Finanzexperte</span>
              </p>
              <div className="mobile-button-center-alignment">
                <button onClick={() => setModalOpen(!modalOpen)}>Jetzt bewerben</button>
                {/* onClick={() => setModalOpen(!modalOpen)} */}
              </div>
            </div>
            <div className="grid-items">
              <div className="profile-image">
                <img src={ProfileImage} alt="ProfileImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}
