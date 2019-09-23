import React from "react"

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="请输入内容"
            onChange={this.handleChange}
            value={this.state.value}
          ></input>
          <button type="submit" className="btn btn-primary">提交</button>
        </div>
      </form>
    )
  }
}

export default CommentBox