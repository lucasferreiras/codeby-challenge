import { useContext } from "react";
import { CartContext } from "../context/Context";
import ProductCard from "./ProductCard";

import "../styles/ProductList.css";

function ProductList() {
  const { cart, formatMoney } = useContext(CartContext);
  return (
    <div className="listContainer">
      <div className="listHead">
        <h2 className="listTitle">Meu Carrinho</h2>
      </div>

      <div>
        {cart?.items.map((item) => {
          return <ProductCard {...item} />;
        })}
      </div>

      <div className="footerTotal">
        <div className="totalContainer">
          <h2 className="totalTitle">Total</h2>
          <h2 className="totalPrice">R$ {formatMoney(cart?.value)}</h2>
        </div>

          {cart?.value > 1000 && (
            <div className="freteContainer">
              <h3>Parabéns,sua compra tem frete grátis!</h3>
            </div>
          )}
      </div>

      <div className="buttonContainer">
        <button className="listButton">Finalizar compra</button>
      </div>
    </div>
  );
}
export default ProductList;
