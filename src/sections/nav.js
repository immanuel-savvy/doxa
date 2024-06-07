"use client";

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Padder from "../components/padder";
import Link from "next/link";
import { to_title } from "../assets/utils/functions";

class Custom_nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    let { navs } = this.props;

    return (
      <div>
        <div
          className="header"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            position: "fixed",
            width: "100vw",
          }}
        >
          <div className="container">
            <div id="navigation" className="navigation navigation-landscape">
              <Navbar light expand="lg">
                <NavbarBrand href="/" className="nav-brand">
                  <h2 className="text-dark">Calculator Master</h2>
                </NavbarBrand>
                <NavbarToggler
                  ref={(nav_toggle) => (this.nav_toggle = nav_toggle)}
                  style={{ color: "#000" }}
                  onClick={this.toggle}
                />

                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav
                    className="ml-auto"
                    navbar
                    style={{ alignItems: "center" }}
                  >
                    {navs && navs.length
                      ? navs.map((nav, index) => {
                          return (
                            <NavItem key={index}>
                              <NavLink
                                style={{
                                  backgroundColor: "transparent",
                                }}
                              >
                                <Link
                                  style={{ textDecorationColor: "none" }}
                                  href={nav?.path}
                                >
                                  <span style={{ color: "#000" }}>
                                    {to_title(nav?.title?.replace(/_/g, " "))}
                                  </span>
                                </Link>
                              </NavLink>
                            </NavItem>
                          );
                        })
                      : null}

                    <NavItem>
                      <NavLink
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <Link
                          style={{
                            textDecorationColor: "none",
                            borderLeftColor: "#ccc",
                            borderLeftWidth: 1,
                            borderLeftStyle: "solid",
                            paddingLeft: 10,
                          }}
                          href="/blog"
                        >
                          <span style={{ color: "#000" }}>Blog</span>
                        </Link>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>

        <Padder />
      </div>
    );
  }
}

export default Custom_nav;
