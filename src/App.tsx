/// <reference types="styled-components/cssprop"/>
import React from 'react';
import './App.css';
import { Button } from 'antd';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Button type="primary">Button</Button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
