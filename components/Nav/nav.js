import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "../../src/img/niagara-web-design-infused-logo.webp";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top">
      <Navbar id="nav" expand="lg">
        <Container fluid>
          <NavbarBrand className="logo" name="Infused Agency">
            <Link href="/">
              <Image className="logo" src={logo} alt="Infused Agency Logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  title="Niagara Web Design"
                  href="/services"
                  className="nav-link"
                >
                  Solutions
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/work" className="nav-link">
                  Work
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/pricing" className="nav-link">
                  Pricing
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/process" className="nav-link">
                  Process
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link btn"
                  href="/get-a-quote"
                  rel="noreferrer"
                >
                  Get A Quote
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                  </svg>
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
