import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/login" component={LoginPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement);
registerServiceWorker();
