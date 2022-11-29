import React from 'react'
import  {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Game from './components/Game'
import './index.css'

const App = () => {
  return (

    <div className="App">
    <Routes>
    <Route path='/' exact element={<Home />} />
    <Route path='/play' exact element={<Game />} />
    </Routes>
    </div>
    )

}

export default App