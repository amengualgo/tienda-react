import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function Item(props){
    const {index, imagen, nombre, precio, id } = props;
    return(
        <Card key={`Card_${index}`} style={{width: '18rem', margin: "2px"}}>
            <Card.Img style={{width: "100px", height:"100px"}} key={`CardImg_${index}`} variant="top"
                      src={imagen}/>
            <Card.Body key={`CardBody_${index}`}>
                <Card.Title key={`CardTitle_${index}`}>{nombre}</Card.Title>
                <Card.Text key={`CardText_${index}`}>{precio}</Card.Text>
                <Link to={`/item/${id}`}>
                    <Button key={`Button_${index}`} variant="primary">Ver mas</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;