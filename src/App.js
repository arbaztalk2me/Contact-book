import "./App.css";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContacts from "./components/AddContacts";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-5">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/addcontact" component={AddContacts} />
                <Route exact path="/editcontact/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
