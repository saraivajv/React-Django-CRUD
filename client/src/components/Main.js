import Home from './Home'
import Header from './Header'
import Register from './Register';

import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
        </Switch>
      </div>
    );
  }
  
  export default Main;