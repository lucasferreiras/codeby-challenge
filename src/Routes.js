import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
}

export default Routes;