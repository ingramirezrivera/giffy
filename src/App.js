import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";



export default function App() {
  const [keyword, setKeyword] = useState('Panda')

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Pandas</Link>
        <Link to="/gif/barcelona">Barcelona</Link>
        <Link to="/gif/madona">Madona</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />          
      </section>
    </div>
  )
}


