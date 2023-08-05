import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMusic_128 from '../../assets/logoMusic_128.png'
import CartWidgetMusicBox from "../cart-widget/cart-widget";

function NavBarMusicBox() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <a className="navbar-brand" href="#">
                    <img src={logoMusic_128} width="30" height="30" alt="" />
                </a>
                <Navbar.Brand href="#home" style={{color:"#463723"}}>MusicBox</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Contáctenos</Nav.Link>
                        <NavDropdown title="Instrumentos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cuerda</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Viento</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Percusión</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Escuela</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Eventos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetMusicBox />
            </Container>
        </Navbar>
    );
}

export default NavBarMusicBox;