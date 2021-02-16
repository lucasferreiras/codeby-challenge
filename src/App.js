import { useState } from "react";

import Routes from "./Routes";
import CartContextProvider from "./context/Context";

import "./styles/App.css"

const API_MORE_TEN = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210215T210842Z&X-Amz-Expires=86400&X-Amz-Signature=5b6d20654177f01edd57114474fb17dafb1ef49f63f90da0463c93546fb685ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"acima-10-reais.json"`;
const API_LESS_TEN = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210215T145031Z&X-Amz-Expires=86400&X-Amz-Signature=c673797a39e4ab048c34630704f5286657ea6e90580887fa82364a1050ec95d2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22`;

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
        <button onClick={toggleApiURL}>
          {apiURL === API_LESS_TEN ? "Ver com frete" : "Ver sem frete"}
        </button>
        <Routes />
      </CartContextProvider>
    </div>
  );
}

export default App;
