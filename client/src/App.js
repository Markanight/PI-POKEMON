import{BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate'
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={'/'} component={LandingPage}/>
          <Route exact path={'/home'} component={Home}/>
          <Route exact path={'/pokemon'} component={PokemonCreate}/>
          <Route exact path={'/home/:pokeId'} component={Detail}/>
          
      </Switch>
      </BrowserRouter>
        
      
   
      
      
   
  );
}

export default App;
