import React from "react"

class Welcome extends React.Component {
  render() {
    const ulist = ['2', 'r', 'ooop']
    const isLogin = true
    // return (
    //   <div className="main" >
    //     <h1>Hello React</h1>
    //     <ul>
    //       {
    //         ulist.map(e =><li>{e}</li> )
    //       }
    //     </ul>
    //     { isLogin ? <p>你已经登陆</p> : <p>请登陆</p> }
    //   </div>
    // )
    return React.createElement(
      'div',
      {className: '22', id: 'didd'},
      React.createElement(
        'h1',
        null,
        'hello react'
      )
    )
  }
}

export default Welcome