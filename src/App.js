import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import "./styles/mixins/global.scss";
import Footer from "./components/home/footer";
import Header from "./components/home/header";
import FinancialGuide from "./components/financialGuide";
import Cookies from "./components/cookies";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";

function App() {
  const [cookieModal, setCookieModal] = React.useState(false);
  React.useEffect(() => {
    let cookieData = localStorage.getItem("cookie");
    if (cookieData) {
      cookieData = JSON.parse(cookieData);
      setCookieModal(cookieData?.cookie ? false : true);
    } else {
      setCookieModal(true);
    }
  }, []);
  const onClose = () => {
    setCookieModal(false);
    localStorage.setItem("cookie", JSON.stringify({ cookie: true }));
  };
  return (
    <>
      <Router>
        <Header />
        {/* {cookieModal && <Cookies onClose={onClose} />} */}
        {/* <Route exact path="/"> */}
        {/* <Redirect to="/lp1" /> */}
        {/* </Route> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/lp2" component={FinancialGuide} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
