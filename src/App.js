import "antd/dist/antd.css";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebaseConfig } from "./config/firebase";
import AddPlant from "./Pages/AddPlant";
import Login from "./Pages/Login";
import Plants from "./Pages/Plants";

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/add" component={AddPlant} />
        </Switch>
      </Router>
      <Plants />
    </div>
  );
};

export default App;
