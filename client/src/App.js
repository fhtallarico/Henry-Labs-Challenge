import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Catalogue from './components/Catalogue/Catalogue.jsx'

function App() {
  return (
    <Router>
      <Route exact path='/' component= {Home} />
      <Route exacty path='/catalogue' component={Catalogue}/>
    </Router>
  );
}

export default App;
