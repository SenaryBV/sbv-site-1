import React from 'react'
import { Link } from 'gatsby'

import SocialLinks from '../social/SocialLinks'
import './footer.scss'

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="Footer__Contents">
      <nav className="Nav">
        <a
          className="Nav__Link"
          href="/#home"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="Nav__Link"
          href="/#commonwealth"
          rel="noopener noreferrer"
        >
          Commonwealth
        </a>
        <a
          className="Nav__Link"
          href="/#get-involved"
          rel="noopener noreferrer"
        >
          Get Involved
        </a>
        <a
          className="Nav__Link"
          href="/our-story#ourstory-home"
          rel="noopener noreferrer"
        >
          Our Story
        </a>
        <SocialLinks />
      </nav>
    </div>
  </div>
)

export default Footer
