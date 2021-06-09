import React from 'react';

import './Header.css';
import './Animatetext.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <header className="header-style"> 
       <div className="text-3">TR<span className="txt-rotate"
                data-period="2000"
                data-rotate='["IP PLANNER"]'></span></div>
      </header>
    );
  } 
}

export default Header;