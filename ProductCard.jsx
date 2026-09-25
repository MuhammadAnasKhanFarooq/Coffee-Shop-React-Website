function ProductCard(props) { 
  return ( 
    <div className="product-card"> 
      <img 
        src={props.image} 
        alt={props.name} 
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
      /> 
      <h2>{props.name}</h2> 
      <p>Price: {props.price}</p> 
      <button>Add to Cart</button> 
    </div> 
  ); 
} 

export default ProductCard;