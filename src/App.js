import React from "react"

import Header from './components/Header'
import OrderList from './components/OrderList'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className="App">
        <Header />
        <OrderList />
      </div>
    )
  }
}

export default App