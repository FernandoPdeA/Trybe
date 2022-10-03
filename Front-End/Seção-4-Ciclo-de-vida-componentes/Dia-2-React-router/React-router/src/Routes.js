import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from './pages/Content';
import Home from './pages/Home';
import Recordings from './pages/Recordings';
import NotFound from './pages/NotFound';
import Module from './pages/Module';

class Routes extends React.Component {
  //urlAtual: http://localhost:3000/content/fundamentals
  //pathAtual: ""

  render() {
    return (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" render={ (props) => <Home {...props} title="Sou home" /> } />
        <Route path="/content/:idDoModulo" component={Module} />
        <Route path="/content" component={Content} />
        <Route path="/live-lectures" component={Recordings} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

/// <Home title="Sou home" />

export default Routes;