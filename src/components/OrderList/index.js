import React, { Component } from 'react'

import "./style.css"
import OrderItem from '../OrderItem'

class OrderList extends Component {
  render() {
    const list = [
      {
        shop: '院落创意菜',
        picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569342464796&di=f2393d837ea3088ff046363a1da7973a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01de245840e23ea8012060c8d78b48.JPG%401280w_1l_2o_100sh.jpg',
        product: '百香果 1 扎',
        price: 29.9,
        ifCommented: false
      }, 
      {
        shop: '人在茶在',
        picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569342494484&di=3a8b8e51dce1c06286784bda1b8414f0&imgtype=0&src=http%3A%2F%2Fpic176.nipic.com%2Ffile%2F20180807%2F7235424_131719065000_2.jpg',
        product: '金桔柠檬茶',
        price: 20,
        ifCommented: true
      },
      {
        shop: '一点点',
        picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569342652776&di=03a468d4ea50032fb5da49c5093d75c8&imgtype=0&src=http%3A%2F%2Fimg.ixinwei.com%2Fiww201802%2F111595.jpg',
        product: '珍珠奶茶',
        price: 14,
        ifCommented: true
      }
    ]
    return (
      <div className="orderList">
        {list.map((e,i) => <OrderItem item={e} key={i}/>)}
      </div>
    );
  }
}

export default OrderList;