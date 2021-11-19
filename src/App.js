import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import FormikForm from "./FormikForm";
import HookForm from "./HookForm";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Redirect to="/formik" />
            </Route>
            <Route path="/formik" component={FormikForm} />
            <Route path="/hook_form" component={HookForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
