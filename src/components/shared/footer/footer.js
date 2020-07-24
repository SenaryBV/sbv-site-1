import React from 'react'
import { Link } from 'gatsby'

import SocialLinks from '../social/SocialLinks'
import './footer.scss'

import MadeByRaidGuildSrc from '../../../images/raid-guild-banner.png'

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
          Adventures
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
          href="/our-story/#ourstory-home"
          rel="noopener noreferrer"
        >
          Our Story
        </a>
        <SocialLinks />
        <div className="MadeByRaidGuild">
          <a href="https://raidguild.org/" target="_blank" rel="noopener noreferrer">
            <img src={MadeByRaidGuildSrc} alt="made by raidguild" width="250px" height="auto" />
          </a>
        </div>
      </nav>
    </div>
  </div>
)

export default Footer
