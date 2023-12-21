import { Navbar, Button } from "keep-react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userProfile from "../../assets/user2.png";

export const NavbarComponent = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-md sticky top-0">
      <Navbar className="container mx-auto" fluid={true}>
        <Navbar.Container className="flex items-center justify-between py-2">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="keep" width="100" height="40" />
              </Link>
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
            {user ? (
              <>
                <Button onClick={handleLogOut} size="sm" type="outlinePrimary">
                  LogOut
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button size="sm" type="primary">
                  Login
                </Button>
              </Link>
            )}
            <div>
              {user ? (
                <img
                  className="w-10 h-10 border rounded-full"
                  src={user.photoURL}
                />
              ) : (
                <img className="w-10" src={userProfile} alt="" />
              )}
            </div>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};
