import React from "react"

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    // this.increaseLikes = this.increaseLikes.bind(this)
  }

  increaseLikes() {
    console.log(this);
    this.setState({
      likes: ++this.state.likes
    })
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentDidUnmount');
  }

  render() {
    return (
      <div className="likes-button-component">
        <button 
          type="button" 
          className="btn btn-outline-primary btn-lg"
          // onClick={this.increaseLikes}
          onClick={() => {this.increaseLikes()}}
        >
          <span>👍</span>{this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton