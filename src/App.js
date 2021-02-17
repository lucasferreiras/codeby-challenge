import { useState } from "react";

import Routes from "./Routes";
import CartContextProvider from "./context/Context";

import "./styles/App.css";

const API_MORE_TEN = `/acima-10-reais.json`;
const API_LESS_TEN = `/abaixo-10-reais.json`;

function App() {
  const [apiURL, setApiURL] = useState(API_MORE_TEN);

  function toggleApiURL() {
    if (apiURL === API_MORE_TEN) {
      setApiURL(API_LESS_TEN);
    } else {
      setApiURL(API_MORE_TEN);
    }
  }

  return (
    <div className="appContainer">
      <CartContextProvider apiURL={apiURL}>
        <div className="buttonContainerApi">
          <button onClick={toggleApiURL} className="buttonChangeApi">
            {apiURL === API_LESS_TEN ? "Ver com frete grátis" : "Ver sem frete grátis"}
          </button>
        </div>
        <Routes />
      </CartContextProvider>
    </div>
  );
}

export default App;
