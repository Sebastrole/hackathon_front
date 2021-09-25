import logo from './logo.svg';
import './App.css';
import ConsumerForm from './components/consumerForm/consumerForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <Switch>
          <Route path="/consumerForm">
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
    </BrowserRouter> 
  );
}

export default App;
