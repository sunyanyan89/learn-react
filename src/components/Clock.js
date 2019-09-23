import React from "react"

const formateTime = (time) => {
  if(!time) return '';
  return new Date(time).toLocaleString().replace(/\//g, '-').replace('上午', '')
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  componentDidUpdate(curProps, curState) {
    console.log(curProps, curState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="clock-component jumbotron">
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock