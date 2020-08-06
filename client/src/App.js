import React, { useEffect } from 'react';
import Axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NoMatch from './containers/NoMatch/NoMatch';
import Home from "./containers/Home/Home"


function App() {
  useEffect(() =>{
    Axios
    .get("/api/config")
    .then((resonse) =>{
      console.log(resonse.data);
    })
    .catch((err) =>{
      console.log(err)
    });

  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
      
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
         <Route component= {NoMatch}/>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
