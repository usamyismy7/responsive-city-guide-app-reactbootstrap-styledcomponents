import React, { Component } from 'react'
import styled from 'styled-components'

export class Footer extends Component {
  render() {
    return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Moscow</li>
                <li>Russia</li>
                <li>Phone:</li>
                <li>+1 221 312 878</li>
              </ul>
            </div>
            {/*Column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
              </ul>
            </div>
            {/*Column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
              </ul>
            </div>
            {/*Column 4*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
                <li><a href="/">Lorem Ipsum</a></li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
    )
  }
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
    text-decoration: none;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;

export default Footer