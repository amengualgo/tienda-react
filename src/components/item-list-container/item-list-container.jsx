
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import {useElementsByCategory} from "../../hooks/useElementsByCategoria";
import LoadingPane from "../loading-pane/loading-pane";
import Item from "../item/item";
function ItemListContainerMusicBox(){
    const { categoryId } = useParams();
    const products = useElementsByCategory(categoryId);

    if(!products.length)
        return <LoadingPane/>

    return (
        <Container className="d-flex flex-wrap">
            {
                products.map((producto, index) =>(
                    <Item key={'Item_'+index} index={index} imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} id={producto.id} />
                ))
            }
        </Container>
    );

}

export default ItemListContainerMusicBox
