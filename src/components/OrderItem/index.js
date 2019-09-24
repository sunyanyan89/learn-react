import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {
  render() {
    const { shop, product, price, picture, ifCommented } = this.props.item
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img className="orderItem__pic" src={picture} alt=""></img>
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            {/* <div><button className={["orderItem__btn", ifCommented ? 'orderItem__btn--gray' : 'orderItem__btn--red'].join(' ')}>评价</button></div> */}
            {/* es6语法写动态class 推荐 */}
            <div><button className={`orderItem__btn ${ifCommented ? 'orderItem__btn--gray' : 'orderItem__btn--red'}`}>{ifCommented ? '已评价' : '评价'}</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;