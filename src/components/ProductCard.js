import "../styles/ProductCard.css";

function ProductCard(props) {
  // const { json } = useContext(CartContext);

  function formatMoney(number) {
    return (parseFloat(number) / 100.0).toFixed(2).replace(".", ",");
  }

  return (
    <div>
      <div className="cardContainer">
        <div className="imageContainer">
          <img src={props.imageUrl} alt={""} className="image" />
        </div>
        <div>
          <h3 className="cardProduct"> {props.name}</h3>
          <p className="cardPrice">R$ {formatMoney(props.price)}</p>
          <p className="cardDiscount">R$ {formatMoney(props.sellingPrice)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
