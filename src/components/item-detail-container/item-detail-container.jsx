import {Button, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useParams} from "react-router-dom";
import Error404 from "../error-404/error-404";
import {useElementById} from "../../hooks/useElementById";
import ItemCountMusicBox from "../item-count/item-count";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";
import LoadingPane from "../loading-pane/loading-pane";


function ItemDetailContainerMusicBox(){
    const { id } = useParams();
    const product = useElementById(id);
    const {addItem} = useContext(CartContext);
    const onAdd = (amount)=>{
        addItem(amount, product)
    };

    if(!product){
        return (<LoadingPane />)
    }

    return(

        <Container className="d-flex flex-wrap">
            {
                product.id ?
                    <Card key={`Card_${product.id}`} style={{ width: '18rem', margin:"2px" }}>
                        <Card.Img style={{width:"100px"}} key={`CardImg_${product.id}`} variant="top" src={product.imagen} />
                        <Card.Body key={`CardBody_${product.id}`}>
                            <Card.Title key={`CardTitle_${product.id}`}>{product.nombre}</Card.Title>
                            <Card.Text key={`CardTextVal_${product.id}`}>$ {product.valor}</Card.Text>
                            <ItemCountMusicBox min={1} max={product.stock} onAdd={onAdd}/>
                            <Card.Text key={`CardTextDes_${product.id}`}>{product.descripcion}</Card.Text>
                            <Link to={'/'}>
                                <Button key={`Button_${product.id}`} variant="primary">Volver</Button>
                            </Link>
                        </Card.Body>
                    </Card> : <Error404/>
            }
        </Container>
    );
}

export default ItemDetailContainerMusicBox
