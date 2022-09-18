import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../styles/components/NavBar.scss'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Restaurante La 44</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#platos-tipicos">Platos Tipicos</Nav.Link>
            <Nav.Link href="#picadas">Picadas</Nav.Link>
            <Nav.Link href="#carnes-asadas">Carnes Asadas</Nav.Link>
            <Nav.Link href="#pescados">Pescados</Nav.Link>
            <Nav.Link href="#bebidas">Bebidas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;