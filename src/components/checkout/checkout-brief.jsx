import Container from "react-bootstrap/Container";
import { Offcanvas} from "react-bootstrap";

function CheckOutMusicBox(props) {
    const {show, setShow} = (props)
    const closeSidebar = () => setShow(false);

    return (
        <>
            <Container>
                <Offcanvas show={show} onHide={closeSidebar} style={{width:"35%"}}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    );
}
export default CheckOutMusicBox;