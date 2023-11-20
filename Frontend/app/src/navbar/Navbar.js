import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const AppNavbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar
        className="bg-body-tertiary"
        bg="green"
        style={{ padding: "10px" }}>
        <Navbar.Brand style={{ color: "white" }} href="/pages/home">
          React
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/pages/home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/pages/aboutus" style={{ color: "white" }}>
            About us
          </Nav.Link>
          <Nav.Link href="/pages/jobs" style={{ color: "white" }}>
            Jobs
          </Nav.Link>
          <Nav.Link href="/pages/contact" style={{ color: "white" }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
