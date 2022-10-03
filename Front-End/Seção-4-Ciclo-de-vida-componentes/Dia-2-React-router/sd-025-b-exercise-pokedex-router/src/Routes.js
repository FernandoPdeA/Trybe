import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokemonDetails from './pages/PokemonDetails';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/pokemon/:id" component={ PokemonDetails } />
        </Switch>
      </div>
    );
  }
}

/*
<Route path="/pokemons/:id" component={Pokemon} />
<Route component={NotFound} />
 */
export default Routes;
