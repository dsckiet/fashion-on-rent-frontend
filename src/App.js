import "./assets/main.css";
import Signup from "./Login/Signup";
import Login from "./Login/Login"
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
   <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>

  </BrowserRouter>
  );
}

export default App;
