import './App.css';
import Title from './components/title';
import Form from './components/form';
import {Switch,Route} from 'react-router-dom'; 
import Confirm from './components/confirm';

function App() {


  return (
    <Switch><Route path='/' exact>
    <div className="App">
      <Title />
      <Form />
    </div>
    </Route>
    <Route path='/confirm' exact><Confirm /></Route>
    </Switch>
  );
}

export default App;
