import {Button, Card} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";
import Container from "react-bootstrap/Container";

function ItemMini(props){
    const {items,removeItem} = useContext(CartContext);

    const {index, imagen, nombre, precio, cantidad, id} = props;


    return(

            <Card key={`Card_${index}`} style={{width: '15%', margin: "2px", display:"flex"}} >
                <Card.Img style={{width: "50px", height:"50px"}} key={`CardImg_${index}`} variant="top"
                          src={imagen}/>
                <Card.Body key={`CardBody_${index}`}>
                    <Card.Text key={`CardTitle_${index}`}>{nombre}x{cantidad}</Card.Text>
                    <Card.Text key={`CardTextPrecio_${index}`}>Precio:{precio}</Card.Text>
                    <Card.Text key={`CardTextValor${index}`}>Valor:{cantidad*precio}</Card.Text>
                    <Button onClick={()=>removeItem(id)} key={`Button_${index}`} variant="danger">Quitar</Button>
                </Card.Body>
            </Card>

    );
}

export default ItemMini;