import React, { useState } from "react";
import "./wirSection.scss";
import FaqImage from "../../../assets/images/faq1.png";
import FaqImage1 from "../../../assets/images/faq1.png";
import ContactModal from "../../ContactModal";
import { toast, ToastContainer } from "react-toastify";
import SecModal from "../../secModal";
export default function WirSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <ToastContainer />
      <div className="wir-section-content-alignment">
        <div className="container-md-8">
          <div className="grid">
            <div className="grid-items"></div>
            <div className="grid-items">
              <h3>Wir sind die Siluna GmbH</h3>
              <h4>Mehr zu Siluna GmbH erfahren</h4>
              <p>
                Eigene Ziele erreichen und finanziell sorgenfrei leben - <br />
                das ist unser Auftrag für unsere Mandanten.
              </p>
              <p>
                Die Siluna GmbH arbeitet auf unterschiedlichen Ebenen daran,
                ihre Finanzsituation so zu optimieren, dass sie langfristig{" "}
                <br />
                zu finanzieller Sicherheit gelangen.
              </p>
              {/* onClick={() => {
                    setModalOpen(!modalOpen);
                  }} */}
              <div className="button-right-alignment">
                <button onClick={() => {
                    setModalOpen(!modalOpen);
                  }}> Jetzt kostenfreie Beratung anfordern</button>
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
