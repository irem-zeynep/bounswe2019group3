import React, { Component } from 'react';
import Routes from './Routes';
import './SignUp.css';
import SideNavigation from "./containers/sideNavigation";
import { MDBContainer, MDBRow } from 'mdbreact';


class App extends React.Component {

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <header className="header"   >
            <img src=".\header2.png" alt="." width=" 100% " />
          </header>
        </MDBRow>

        <div className="flexible-content">

          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>


        </div>
      </MDBContainer>
    );
  }
}

export default App;
