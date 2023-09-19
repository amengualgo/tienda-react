import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoMusic_128 from '../../assets/logoMusic_128.png'
import CartWidgetMusicBox from "../cart-widget/cart-widget";
import { NavLink } from "react-router-dom";
import {useCategories} from "../../hooks/useCategorias";
function NavBarMusicBox() {
    const categoriesMenu = useCategories();
    return (

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        <img src={logoMusic_128} width="30" height="30" alt="" />
                    </NavLink>
                    <Navbar.Brand as={NavLink}  to="/" style={{color:"#463723"}}>MusicBox</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={"nav-link"} to="/">Home</NavLink>
                            <NavLink className={"nav-link"} to="/contact">Contáctenos</NavLink>
                            <NavDropdown title="Instrumentos" id="basic-nav-dropdown">
                                {
                                    categoriesMenu.map((value, index) => {
                                        return (<NavDropdown.Item as={NavLink} key={'NDI_'+index}
                                                          to={`/category/${value}`}>{value}</NavDropdown.Item>)
                                    })
                                }
                            </NavDropdown>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item  as={NavLink} to="/escuela">Escuela</NavDropdown.Item >
                                <NavDropdown.Item  as={NavLink} to="/eventos">Eventos</NavDropdown.Item >
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidgetMusicBox />
                </Container>
            </Navbar>
    );
}
export default NavBarMusicBox;