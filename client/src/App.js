import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import MainStory from "./components/Main/MainStory";
import ArticleGrid from "./components/ArticleGrid/ArticleGrid";
import SecondaryContent from "./components/SecondaryContent/SecondaryContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div className="App">
            <NavBar />
            <div className="main-content">
              <MainStory />
              <ArticleGrid />
              <SecondaryContent />
            </div>
            <Footer />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
