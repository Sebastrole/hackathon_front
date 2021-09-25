import logo from './logo.svg';
import './App.css';
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
