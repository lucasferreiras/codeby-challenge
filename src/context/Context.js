import { useState, createContext,useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState();
  const [json, setJson] = useState();

  useEffect(() => {
    axios
    .get(
      `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210215T145031Z&X-Amz-Expires=86400&X-Amz-Signature=c673797a39e4ab048c34630704f5286657ea6e90580887fa82364a1050ec95d2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22`
    )
    .then((res) => {
      const data = res.data;
      setJson(data);
    });

},[])
console.log(json)

  return (
    <CartContext.Provider value={{ cart, setCart, json }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
