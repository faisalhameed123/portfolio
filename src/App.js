import React from 'react';
import Navigation from './components/navigation';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"

const App = props => {

  return (
    <div className="App">
     <Navigation />
     {props.children}
    </div>
  );
}

export default App;
