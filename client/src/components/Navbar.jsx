import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Nav-bar">
        <div className="Links"> 
          <Link to="/">Home</Link>
          <br />
          <Link to="/Mind">Mind</Link>
          <br />
          <Link to="/Heart">Heart</Link>
          <br />
          <Link to="/Soul">Soul</Link>
          <br />
          <Link to="/Create">New</Link>
        </div>
        <div className="External">
          <a href="https://www.brainyquote.com/">
            BrainyQuotes
          </a>
          <br />
          <a href ="https://www.inspiringquotes.us/">
            InspiringQuotes
          </a>
        </div>
        
      </div>
    </nav>
  )

}