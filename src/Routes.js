import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserList from "./Pages/Users/List";
import UserCreate from "./Pages/Users/Create";
import ProductsCreate from "./Pages/Products/Create";
import ProductsList from "./Pages/Products/List";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UserList} />
        <Route path="/users/create" exact component={UserCreate} />

        {/* Rotas de Produtos */}
        <Route path="/products" exact component={ProductsList} />
        <Route path="/products/create" exact component={ProductsCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
