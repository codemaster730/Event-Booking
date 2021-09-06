import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/core/Header'
import Footer from './components/core/Footer'
import "./app.styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const LandPage = lazy(() => import('./components/LandPage'));
const Register = lazy(() => import('./components/Register'));
const EventList = lazy(() => import('./components/EventList'));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <div className="page-section">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LandPage}/>
            <Route path="/register" component={Register}/>
            <Route path="/list" component={EventList}/>
          </Switch>
        </Suspense>
        </div>
        <Footer/>
      </Router>
    );
  }
}
export default App;
