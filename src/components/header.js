import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/LeoLogo.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Leo"}>
                        {/* <img alt={"Logo"} src={logo}/> */}
                        <h1 style={{marginTop: 0}}>Leo</h1>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <a href={"https://testflight.apple.com/join/kw2whfjH"} target="_blank">Test the Beta</a>
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
