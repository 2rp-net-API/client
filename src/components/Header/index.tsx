import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signout();
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          Sistema de Controle de Horas Extras
        </Navbar.Brand>
        <Navbar.Toggle arai-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "flex-end",
            }}
          >
            <Nav.Link href="horaextra">HoraExtra</Nav.Link>

            {auth.colaborador && (
              <Button size="large" variant="outlined" onClick={handleLogout}>
                Sair
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
