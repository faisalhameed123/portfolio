import React from 'react';
import ReactDom from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Redirect from './components/Redirect';
import App from './App';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Cv from './pages/Cv';
import Contact from './pages/Contact';

ReactDom.render(
  <Router>
        <App>
          <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route path="/cv" exact component={Cv} />
              <Route path="/contact" exact component={Contact} />
              <Route path='/got'render={(props) => <Redirect {...props} loc="http://mfhameed.net/Game-of-thrones/Game-of-Thrones/index.html" />} />
              <Route path='/nasa'render={(props) => <Redirect {...props} loc="https://mfhameed.net/humans-in-space/Nasa-project%20/index.html" />} />
              <Route path='/bess'render={(props) => <Redirect {...props} loc="https://mfhameed.net/Besseggen%20VV%20new/Home-Besseggen.html" />} />
              <Route path='/home'render={(props) => <Redirect {...props} loc="https://mfhameed.net/CA-Home_Fair/CA-home_fair/index.html" />} />
              <Route path='/un'render={(props) => <Redirect {...props} loc="https://mfhameed.net/Unwebsite/unhome.html" />} />
              <Route path='/design'render={(props) => <Redirect {...props} loc="https://mfhameed.net/home-fair/Homefair-MA-3/index.html#second_link" />} />   
              <Route path='/faceb'render={(props) => <Redirect {...props} loc="https://www.facebook.com/faisal.hameed1?ref=bookmarks" />} />  
              <Route path='/linkedin'render={(props) => <Redirect {...props} loc="https://www.linkedin.com/in/faisal-hameed-6330897b/" />} />            
          </Switch>
        </App>
  </Router>,
      document.getElementById('root')

);