import {Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useParams} from "react-router-dom";
import {useElementsByCategory} from "../../hooks/useElementsByCategoria";
function ItemListContainerMusicBox(){
    const { categoryId } = useParams();
    const products = useElementsByCategory(categoryId);

    return(
        <Container className="productos d-flex flex-wrap">
            {
                products.map((producto, index) => (
                    <Card key={`Card_${index}`} style={{ width: '18rem', margin:"2px" }}>
                        <Card.Img style={{width:"100px"}} key={`CardImg_${index}`} variant="top" src={producto.imagen} />
                        <Card.Body key={`CardBody_${index}`}>
                            <Card.Title key={`CardTitle_${index}`}>{producto.nombre}</Card.Title>
                            <Card.Text key={`CardText_${index}`}>{producto.precio}</Card.Text>
                            <Link to={`/item/${producto.id}`}>
                                <Button key={`Button_${index}`} variant="primary">Ver mas</Button>
                            </Link>

                        </Card.Body>
                    </Card>
                ))
            }
        </Container>
    );
}

export default ItemListContainerMusicBox
