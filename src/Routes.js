import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./Pages/Users/List";
// import Home from "./pages/Home/index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
