import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => {
  console.log("Inside App");
  return(
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/">Pari</Link>

    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)
}
export default App
