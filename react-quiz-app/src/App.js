import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Addquiz from "./components/Addquiz";
import Home from "./components/Home";

function App() {
  return (
    <Router>       
      <Switch>        
        <Route path="/quiz">
          <Addquiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
