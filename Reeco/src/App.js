import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Itemdetails from './components/Itemdetails'
import TableItems from './components/TableItems'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Header />
        <Itemdetails />
        <TableItems />
      </Provider>
    </div>
  )
}

export default App
