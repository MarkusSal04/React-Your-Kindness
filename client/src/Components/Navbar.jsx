import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Mind">Mind</Link>
        </li>
        <li>
          <Link to="/Heart">Heart</Link>
        </li>
        <li>
          <Link to="/Soul">Soul</Link>
        </li>
      </ul>
    </nav>
  )

}