import {Button, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useParams} from "react-router-dom";
import data from "../../data/data.json";
import {useEffect, useState} from "react";
import Error404 from "../error-404/error-404";
function ItemListContainerMusicBox(){
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() =>{
        if(id){
            const productsById= data.filter(
                product =>  product.id === Number(id)
            )[0]
            setProduct(productsById)
        }
    }, [id])

    return(
        <Container className="productos d-flex flex-wrap">
            {
                product ?
                    <Card key={`Card_${product.id}`} style={{ width: '18rem', margin:"2px" }}>
                        <Card.Img style={{width:"100px"}} key={`CardImg_${product.id}`} variant="top" src={product.imagen} />
                        <Card.Body key={`CardBody_${product.id}`}>
                            <Card.Title key={`CardTitle_${product.id}`}>{product.nombre}</Card.Title>
                            <Card.Text key={`CardText_${product.id}`}>{product.precio}</Card.Text>
                            <Link to={'/'}>
                                <Button key={`Button_${product.id}`} variant="primary">Volver</Button>
                            </Link>
                        </Card.Body>
                    </Card> : <Error404/>
            }
        </Container>
    );
}

export default ItemListContainerMusicBox
