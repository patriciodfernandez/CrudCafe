import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Navegacion = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="icono">Cafesito</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <h2>
            <Link className="m-5 text-light text-decoration-none" to="/">Inicio</Link>
          </h2>
          <h2>
            {" "}
            <Link className="m-5 text-light text-decoration-none" to="/productos">Productos</Link>
          </h2>
          <h2>
            {" "}
            <Link className="m-5 text-light text-decoration-none" to="/productos/nuevo">Agregar Productos</Link>
          </h2>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
