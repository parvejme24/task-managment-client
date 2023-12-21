"use client";
// import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const navItems = (
    <>
      <Navbar.Link linkName="Home" />
      <Navbar.Link linkName="Projects" />
      <Navbar.Link linkName="Blogs" />
      <Navbar.Link linkName="News" />
      <Navbar.Link linkName="Resources" />
    </>
  );
  return (
    <div className="shadow-md sticky top-0">
      <Navbar className="container mx-auto" fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <img src={logo} alt="keep" width="100" height="40" />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              {navItems}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {navItems}
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Link to="/login">
              <Button size="sm" type="primary">
                Login
              </Button>
            </Link>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};
