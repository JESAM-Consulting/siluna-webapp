import React, { useState } from "react";
import "./textSection.scss";
import UnionIcon from "../../../assets/icons/Union.svg";
import UnionIcon1 from "../../../assets/icons/Union (1).svg";
import UnionIcon2 from "../../../assets/icons/Union (2).svg";
import Subtract2 from "../../../assets/icons/Subtract.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function TextSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <div className="text-section-all-content-alignment">
        <div className="container-md-4">
          <div className="grid">
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon} alt="UnionIcon" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Sicherheit</h2>
                  <p>
                    Unsere Experten sind seit über 30 Jahren im Edelmetall und
                    Rohstoff-Sektor tätig. Diese langjährige Erfahrung nutzen
                    wir, um Sie bestmöglich zu informieren und mit der für Sie{" "}
                    <span>
                      optimalen Anlagestrategie, rechtzeitig und ausreichend
                      abzusichern.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon1} alt="UnionIcon1" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>
                    Erhalt Ihrer finanzieller Sicherheit <br /> und Ihres
                    Wohlstands
                  </h2>
                  <p>
                    Globale Gesundheitskrisen und regionale, politische
                    Unsicherheit erhöht die Rezessions- und Depressionsgefahr
                    der Weltwirtschaft. Unsichere Zeiten erhöhen das Risiko
                    eines Arbeitsplatzverlust und verbundenem Wegfall Ihrer
                    Liquidität.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={UnionIcon2} alt="UnionIcon2" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Engagement wird finanzieller Erfolg</h2>
                  <p>
                    Stets auf der Suche nach dem idealen Produkt für unsere
                    Kunden gründeten wir die Siluna GmbH, um mit der eigenen,
                    exklusiven Strategie passende Angebote zu schaffen. Damit
                    die Marktnachfrage, sowohl im privaten als auch im
                    unternehmerischen Bereich, abgedeckt wird. Genau deshalb ist
                    die Siluna Ihr starker Partner für sichere Investitionen in
                    physische Edelmetalle.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="sub-grid">
                <div className="sub-grid-items">
                  <div className="icon-design">
                    <img src={Subtract2} alt="Subtract2" />
                  </div>
                </div>
                <div className="sub-grid-items">
                  <h2>Absicherung Ihres Vermögens</h2>
                  <p>
                    <span>Geldvermögen:</span> Negativzinsen und die Inflation
                    beschleunigen einen Kaufkraftverlust und bedeuten eine
                    Entwertung von Sparanlagen und Altersvorsorge.
                  </p>
                  <p>
                    <span>Sachvermögen:</span> Blasenbildungen im
                    internationalen Finanzsystem, dem Bausektor (Immobilien,
                    Aktien, Anleihen, Krediten, Derivaten) oder Bankeninsolvenz
                    bedroht Ihr verdientes und angespartes Sachvermögen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-center-alignment">
            {/* onClick={() => setModalOpen(!modalOpen)} */}
            <button onClick={() => setModalOpen(!modalOpen)}>
              Jetzt kostenfreie <br />
              <span className="new-buton-style-span new-buton-style-span-sec">Beratung anfordern</span>
            </button>
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
    </>
  );
}
