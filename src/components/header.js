import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/LeoLogo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"


function BetaPage(props) {
  if(true){
    return (
      <div className={"get-started"}>
        <a href={"http://www.readleo.com/#download_beta"}>Test the Beta</a>
      </div>
    )
  }
}

const Header = (props) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Leo"}>
                        {/* <img alt={"Logo"} src={logo}/> */}
                        <h1 style={{marginTop: 0}}>Leo</h1>
                    </Link>
                </div>
                <div>
                    <BetaPage />

                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
