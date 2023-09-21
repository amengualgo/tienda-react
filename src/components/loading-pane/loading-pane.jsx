import {Spinner} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function LoadingPane(){
    return(
        <Container className="productos d-flex flex-wrap">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Espere por favor...</span>
            </Spinner>
        </Container>
    );
}

export default LoadingPane;
