import React, { useContext } from "react";
import './App.css';
import injectContext, { Context } from './store/appContext';
import Personajes from './views/Personajes';
import Naves from './views/Naves';
import Planetas from './views/Planetas';
import Home from './views/Home';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NotFound from './views/NotFound';
import InfoPersonaje from "./views/InfoPersonaje";
import InfoShip from "./views/InfoShip";
import InfoPlaneta from "./views/InfoPlaneta";


function App(props) {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="container-fluid">
            <Navbar />
            <Switch>
              <Route exact path="/infopersonajes/:id" component={InfoPersonaje}  />
              <Route exact path="/infoship/:id" component={InfoShip} />
              <Route exact path="/infoplaneta/:id" component={InfoPlaneta} />
              <Route exact path="/personajes" component={Personajes}  />
              <Route exact path="/naves" component={Naves} />
              <Route exact path="/planetas" component={Planetas}  />
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
            
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default injectContext(App);
