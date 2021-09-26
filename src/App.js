import './App.css';
import ConsumerForm from './components/consumerForm/consumerForm';
import ProducerView from './components/producerView/producerView';
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/producerView">
            <ProducerView />
          </Route>
          <Route path="/consumerForm/:id">
            <ConsumerForm>
            </ConsumerForm>
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
             {
               function () {
                 return(
                  <p>
                    Hola mundo
                  </p> 
                 )
               }
             }
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
