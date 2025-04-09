
import React from 'react'
import "@fontsource/red-hat-text/600.css"
import "@fontsource/red-hat-text/700.css"
import  Desserts  from "../Dessert/Desserts.jsx"; 
import data from "../../data.json";
import "../DessertList/DessertList.css"


const DessertList = () => {

   const [dessert, setDessert] = React.useState(data);
      

return (
  <div className="productListContainer">
    <h2 className="heading">Desserts</h2>
    <div className="productsContainer">
      {dessert.map((product, index) => (
                <Desserts key={index} product={product} />
              ))}
    </div>
  </div>
);
};

export default DessertList