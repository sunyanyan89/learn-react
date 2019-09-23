import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from "./theme-context"
import ThemeBar from './components/ThemeBar'
// import NameCard from "./components/NameCard"
// import LikesButton from "./components/LikesButton"
// import Clock from "./components/Clock"
// import CommentBox from "./components/CommentBox"
// import CommentList from "./components/CommentList"

// const tags = ['追星一族', 'girl', 'boy', '有礼貌']

const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: 'red'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply'],
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    // this.switchTheme = this.switchTheme.bind(this)
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  deleteComment(idx) {
    this.state.comments.splice(idx, 1)
    this.setState({
      comments: [...this.state.comments]
    })
  }

  switchTheme(theme) {
    this.setState({
      theme
    })
  }

  render() {
    const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Hello, React</h1>
            <a href="#theme-switcher" className="btn btn-light" onClick={() => { this.switchTheme('light')}}>浅色主题</a>
            <a href="#theme-switcher" className="btn btn-secondary" onClick={() => { this.switchTheme('dark')}}>深色主题</a>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
          </header>
          <ThemeBar />
          {/* <NameCard name="yanyan" number={1234567890} tags={tags}/> */}
          {/* <LikesButton />
          <Clock /> 
          <CommentList comments={comments} onDeleteComment={this.deleteComment} />
          <CommentBox comments={comments} onAddComment={this.addComment} />
          */}
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
