import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Addquiz from "./components/Addquiz";
import Home from "./components/Home";
import AddQuestions from './components/AddQuestions';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>       
      <Switch>        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Addquiz />
        </Route>
        <Route path="/add_questions">
          <AddQuestions/>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
