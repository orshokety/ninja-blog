import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDitails from "./components/BlogDetails";
import NotExsist from "./components/404";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDitails />
            </Route>
            <Route path="*">
              <NotExsist />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
