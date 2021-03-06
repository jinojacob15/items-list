import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import GlobalState from 'context/GlobalState';
import LoginForm from 'pages/LoginPage';
import ItemsList from 'pages/ItemsList';
import CreateItem from 'pages/CreateItem';
import GenericNotFound from 'pages/GenericNotFound'

const  App = () => {
  return (
    <GlobalState>
          <Switch>
            <Route path="/" component={LoginForm} exact />
            <Route path="/items" component={ItemsList}   />
            <Route path="/create" component={CreateItem}  /> 
            <Route path="/edit/:id" component={CreateItem}  /> 
            <Route component={GenericNotFound} />
          </Switch>
      </GlobalState>
  );
}

export default App;
