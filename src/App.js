import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className = "content">
     <Switch>
      <Route exact path = "/">
        <Home/>
     </Route>
     <Route exact path = "/Create">
      <Create/>
     </Route>
     <Route exact path = "/blogs/:id">
      <BlogDetails/>
     </Route>
     </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
