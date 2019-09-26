import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || ''
    }
  }

  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data
    return (
      <div className="orderItem">
        <div className="orderItem__container">
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
              <div>
                {/* <button 
                  className={`orderItem__btn ${ifCommented ? 'orderItem__btn--gray' : 'orderItem__btn--red'}`}
                  onClick={this.clickComment}
                >{ifCommented ? '已评价' : '评价'}</button> */}
                {
                  ifCommented ? (<button className="orderItem__btn orderItem__btn--gray">已评价</button>) :
                  (<button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditArea}>评价</button>)
                }
              </div>
            </div>
          </div>
        </div>
        {this.state.editing && this.renderEditArea()}
      </div>
    );
  }

  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea onChange={this.handleCommentChange} value={this.state.comment} className="orderItem__comment" />
        {this.renderStars()}
        <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmitComment}>提交</button>
        <button className="orderItem__btn orderItem__btn--gray" onClick={this.handleCancleComment}>取消</button>
      </div>
    )
  }

  renderStars() {
    const { stars } = this.state
    return (
      <div className="orderItem__startsContainer">
        { [1,2,3,4,5].map((e, i) =>  {
          const lightClass = e <= stars ? 'orderItem__star--light' : ''
          return (
            <span key={i} className={"orderItem__star " + lightClass} onClick={this.handleClickStars.bind(this, e)}>★</span> 
          )
        }) }
      </div>
    )
  }

  handleOpenEditArea = () => {
    this.setState({
      editing: true
    })
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleClickStars = (stars) => {
    this.setState({
      stars
    })
  }

  handleCancleComment = () => {
    this.setState({
      editing: false,
      comment: this.props.data.comment || '',
      stars: this.props.data.stars || 0
    })
  }

  handleSubmitComment = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.props.onSubmit(id, comment, stars)
    this.setState({
      editing: false,
    })
  } 

}

export default OrderItem;