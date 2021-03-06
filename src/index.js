import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieSearch from './components/MovieSearch';
import configureStore from './redux/store';
import Navbar from './components/Navbar';
import React from 'react';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Navbar/> 
      <Switch>
        <Route exact path="/" component={MovieSearch} />
        <Route path="/usermovielist" component={App} />
        <Route path='**' render={() => <Redirect to='/'/> }/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


