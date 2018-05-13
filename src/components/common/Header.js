import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({loading}) => {
  return (
    <div>
    <div>
      <h2><b>Swastik Communication</b></h2>
    </div>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid"><b>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/CctvCamera" activeClassName="active"><b>CCTV Camera</b></Link>
          {" | "}
          <Link to="/Epabx" activeClassName="active">EPABX</Link>
          {" | "}
          <Link to="/Securityalarm" activeClassName="active">Security Alarm</Link>
          {" | "}
          <Link to="/SurvellianceSystem" activeClassName="active">Survelliance System</Link>
          {" | "}
          <Link to="/Contact" activeClassName="active">Contacts</Link>
          {" | "}
          <Link to="/about" activeClassName="active">About</Link>
          {loading && <LoadingDots interval={100} dots={20}/>}
          </b>
        </div>
      </nav>
    </div>
    </div>
  );
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
