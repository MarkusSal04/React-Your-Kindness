import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav >
      <div className="Nav"> 
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
    </nav>
  )

}