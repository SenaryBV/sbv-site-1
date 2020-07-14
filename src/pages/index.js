import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SocialLinks from '../components/shared/social/SocialLinks'

import IconSBV1 from '../images/sbv__icon1.svg'
import IconSBV2 from '../images/sbv__icon2.svg'
import IconSBV3 from '../images/sbv__icon3.svg'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home" id="home">
      <div className="Hero__Contents">
        <p>
        SBV is a multidisciplinary innovation firm devoted to decentralized technology.
        </p>
        <p className="light">
        We support web-based public utilities that democratize opportunity, more justly accrue and distribute value, and promote our greater humanity.
        </p>
        <div className="ButtonGroup">
          <a className="Button" href="#get-involved">
            Contact Us
          </a>
          <a className="Button Filled" href="#get-involved">
            Get Involved
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="HeroBorder BackgroundImage" />
    </div>

    <div className="Block Join">
      <div className="Block__Contents" id="commonwealth">
        <div className="Grid">
          <div className="Column Column--33">
            <img src={IconSBV1} />
            <h4>Workbench</h4>
            <p className="light">
              Stay on top of the latest trends and developments while leveling
              up your skills.
            </p>
          </div>
          <div className="Column Column--33">
            <img src={IconSBV2} />
            <h4>Capital</h4>
            <p className="light">
              We're serious about our work and its impacts on society, but we
              also know how to have a good time.
            </p>
          </div>
          <div className="Column Column--33">
            <img src={IconSBV3} />
            <h4>Commonwealth</h4>
            <p className="light">
              Join the ranks on the front lines and make a direct impact on the
              world around you.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Block GetInvolved" id="get-involved">
      <div className="Block__Contents">
        <h1>Get Involved</h1>
        <div className="GetInvolved_Contents">
        <p>
        We’re always eager to connect and to collaborate. Check out our Medium page to read
        more about our strategic work and thinking. If you’d like to learn more about us; to
        share your insights about the problems we’re solving; or to recruit our community’s
        insights on the problems you are solving.</p>
        <p className="bold">
          Email <a href="mailto:contact@senaryblockchain.ventures">contact@senaryblockchain.ventures</a> and get us involved.
        </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
