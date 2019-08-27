import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Calendly extends React.Component {
    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
  
    componentWillUnmount() {
      // whatever you need to cleanup the widgets code
    }
  
    render(){
      return (
        <div>
            <a href='' onClick='Calendly.initPopupWidget({url:https://calendly.com/readleo;})return false;'> Schedule time to chat</a>
          {/* <div id="schedule_form">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/readleo"
              style={{ minWidth: '320px', height: '580px' }} />
          </div> */}
        </div>
      );
    }
  }

export default Calendly