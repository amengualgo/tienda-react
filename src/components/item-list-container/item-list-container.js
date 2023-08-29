import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function ItemListContainerMusicBox(props){

    const {title, grettings} = props;

    return(

        <Container fluid>
            <Card style={{ width: '100%', margin:'auto', background:"#f2d3ad", color:"#463723"}}>
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>
                        <h1>{title}</h1>
                    </Card.Title>
                    <Card.Text style={{textAlign:"center"}}>
                        <h3>{grettings}</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ItemListContainerMusicBox
