import Routes from "./Routes";
import CartContextProvider from "./context/Context";

function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  );
}

export default App;
