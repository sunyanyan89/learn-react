import React, { Component } from 'react'

import "./style.css"
import OrderItem from '../OrderItem'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch('/mock/order.json').then(res => {
      if(res.ok) {
        res.json().then(data => {
          this.setState({
            list: data.dataList
          })
        })
      }
    })
  }

  handleSubmit = (id, comment, stars) => {
    // fetch('saveComment').then(() => {})
    const newList = this.state.list.map((e, i) => {
      return e.id === id ? 
      {
        ...e, stars, comment, ifCommented: true
      } : e
    })
    this.setState({
      list: newList
    })
  }

  render() {
    const { list = [] } = this.state
    return (
      <div className="orderList">
        {list.length && list.map((e,i) => <OrderItem data={e} key={i} onSubmit={this.handleSubmit}/>)}
      </div>
    );
  }
}

export default OrderList;