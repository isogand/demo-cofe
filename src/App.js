import "./App.css";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Dashboard from "./Dashboard";
import {Provider} from "react-redux";
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Provider store={store}>
            <Dashboard/>
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
