import "./App.css";
import "../src/styles/utilities.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Jobs } from "./pages/jobs";
import { Contact } from "./pages/contact";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Into";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIntro(!intro);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {intro ? (
        <Intro />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
};
