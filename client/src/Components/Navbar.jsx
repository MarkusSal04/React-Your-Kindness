import React from "react"
import { Link } from "react-router-dom"



export default function Navbar() {

  return (
    <nav>
      <div className="Navbar" >
          <div className="Internal"> 
          <Link to="/">Home</Link>
            <Link to="/Mind">Mind</Link>
            <Link to="/Heart">Heart</Link>
          <Link to="/Soul">Soul</Link>
            <Link to="/Create">New</Link>
          </div>
          <div className="External">
            <a href="https://www.brainyquote.com/">
              BrainyQuotes
            </a>
            <a href ="https://www.inspiringquotes.us/">
              InspiringQuotes
            </a>
          </div>
      </div>
    </nav>
  )

}