import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
