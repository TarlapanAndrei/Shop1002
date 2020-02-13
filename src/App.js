import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import './App.css';

const Hats = ({history}) =>(
  <div>
    Hats
    <button onClick={()=>history.push('/')}>Home</button>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component={Homepage} />
     <Route exact path='/hats' component={Hats} />
     </Switch>
    </div>
  );
}

export default App;
