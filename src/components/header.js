import { Link } from "gatsby"
import React from "react"

import './layout.css'

import SEO from './seo.js'

const Header = () => (
  <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          Photos by Hacker Supreme
        </Link>
      </h1>
      <nav class="header">
        <a target="_blank" href="http://hackersupreme.com">
          Hacker Supreme
        </a>
        <a target="_blank" href="https:/instagram.com/jeffgsch">
          Insta
        </a>
      </nav>
  </header>
)

export default Header
