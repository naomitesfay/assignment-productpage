import React from "react"
import Products from "./product"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)


class App extends React.Component {

  render() {
    return (
      <div className="app">

        <div className="product-content">
          {productsJson.products.map((item) => {
            return <Products
                    key={item.id}
                    name={item.name}
                    images={item.image}
                    type={item.type}
                    size={item.size}
                    numberInPack={item.numberInPack}
                    deliveryTime={item.deliveryTime}
                    substance={item.substance}
                    price={item.price} />
          })}
      </div>
      </div>
    )
  }

}

export default App
