import React, { useEffect } from 'react';
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './containers/NoMatch/NoMatch';
import Home from "./containers/Home/Home"
// import NavTabs from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import Contacts from "./containers/Contacts/Contacts";
// import Contact from "./containers/Contact";
import Projects from "./containers/Projects/Projects";

function App() {
  useEffect(() => {
    Axios
      .get("/api/config")
      .then((resonse) => {
        console.log(resonse.data);
      })
      .catch((err) => {
        console.log(err)
      });

  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <NavTabs /> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contacts" component={Contacts} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
