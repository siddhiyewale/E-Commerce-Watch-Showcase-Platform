// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useCart } from "../Components/CartContext";

// const Products = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { dispatch } = useCart();

//   useEffect(() => {
//     fetch(`https://68c2fd1cf9928dbf33f0650e.mockapi.io/watch/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data))
//       .catch(err => console.error(err));
//   }, [id]);

//   if (!product) return <h2>Loading...</h2>;

//   return (
//     <div className="product-detail">
//       <h2>{product.title}</h2>
//       <img src={product.img} alt={product.title} width="300" />
//       <p>{product.description}</p>
//       <p>Price: ₹{product.price}</p>
//       <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default Products;

