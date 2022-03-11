import "./assets/main.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Pag from "./Pages/Homepage";
import Ad from "./Pages/ad";
import Form from "./Pages/category";
import Header from "./Components/Header"
import Footer from "./Components/footer";
import View from "./Pages/viewitem";
import Logtoview from "./Pages/logtoview";
import Mens from "./Pages/Mens";
import Women from "./Pages/Womens";
import Jewellery from "./Pages/Jewellery";
import Kids from "./Pages/Kids";
import {Route , Link} from 'react-router-dom';

function App() {
  return (
    <div >

    <Route exact path = '/' component={Pag}/>
    <Route exact path = '/signup' component={Signup}/>
    <Route exact path = '/signin' component={Login}/>
    <Route exact path = '/ad' component={Ad}/>
    <Route exact path = '/mens' component={Mens}/>
    <Route exact path = '/womens' component={Women}/>
    <Route exact path = '/kids' component={Kids}/>
    <Route exact path = '/Form' component={Form}/>
    <Route exact path = '/jewellery' component={Jewellery}/>
    <Route exact path = '/Logtoview' component={Logtoview}/>
    <Route exact path = '/View' component={View}/>
    </div>
  );
}

export default App;
