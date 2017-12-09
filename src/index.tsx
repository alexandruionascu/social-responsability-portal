import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import IssuesPage from './IssuesPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/map" component={IssuesPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement);
registerServiceWorker();
