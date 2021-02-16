import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();


function CartContextProvider({ children, apiURL }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      const data = res.data;
      setCart(data);
    });
  }, [apiURL]);

  function formatMoney(number) {
    return (parseFloat(number) / 100.0).toFixed(2).replace(".", ",");
  }


  return (
    <CartContext.Provider value={{ cart,formatMoney }}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
