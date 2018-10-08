
import React from "react"

class Products extends React.Component {

  render() {
    return (
      <div className="product-box">
        <h2>{this.props.name}</h2>
        <img src={this.props.images} />
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.substance}</li>
          <li>{this.props.size}</li>
          <li>{this.props.numberInPack} st i förpackning</li>
        </ul>
        <div className="price-container">
        <p>{this.props.price}kr</p>
        <button className="button">Köp</button>
      </div>
        <p className="delivery-time">{this.props.deliveryTime}</p>
      </div>
    )
  }
}

export default Products
