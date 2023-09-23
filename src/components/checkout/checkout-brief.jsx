import Container from "react-bootstrap/Container";
import {useContext, useState} from "react";
import {CartContext} from "../../contexts/cart-context";
import ItemMini from "../item-checkout/item-mini";
import {Link} from "react-router-dom";
import {Button, Card, Col, Form, Row, Stack} from "react-bootstrap";
import Swal from "sweetalert2";
import {getCategories, savePedido} from "../../service/music-box-service";

function CheckOutMusicBox() {
    const {items, clear} = useContext(CartContext);

    const[nombre, setNombre] = useState("");
    const[telefono, setTelefono] = useState("");
    const[email, setEmail] = useState("");

    const enviarPedido = async () => {
        if (nombre.trim() == "" || telefono.trim() == "" || email.trim() == "") {
            Swal.fire('Digita todos los campos');
        } else {
            let totalPEdido = 0;
            items.map(item => {
                totalPEdido = totalPEdido + (item.amount * item.valor)
            })
            const pedido = {
                buyer: {nombre: nombre, telefono: telefono, email: email},
                items,
                total: totalPEdido
            }
            await savePedido(pedido).then(
                function (value) {
                    Swal.fire('Su pedido fue creado correctamente ', value);
                    clear();
                },
                function (error) {
                    throw  error;
                }
            );
        }
    }


    return (

        <Stack gap={4} style={{margin:"auto", width:"100%", textAlign:"center"}}>
            <div className="p-2"><h1>Carrito de compras</h1></div>
            <Container fluid>
                <Row>
                    <Col>

                        {items.length > 0 ? items.map((item,index)=>{return(<ItemMini key={'mini_'+index} index={index} imagen={item.imagen}
                                                                                  nombre={item.nombre} precio={item.valor} cantidad={item.amount} id={item.id}/>)}):<>Carrito de compras vacío</>}

                    </Col>
                </Row>
            </Container>
            <Container fluid>
                {items.length>0&&

                        <Card style={{ width: '18rem', margin:"5px" }}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control as="input" value={nombre} onChange={(event)=>setNombre(event.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Telefono:</Form.Label>
                                    <Form.Control as="input" value={telefono} onChange={(event)=>setTelefono(event.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                                </Form.Group>
                                <Button onClick={()=>enviarPedido()} variant="primary">Comprar carrito</Button>
                            </Form>
                        </Card>}

            </Container>
            <div className="p-2">
                <Link to={'/'}>
                    <Button variant="warning">Seguir comprando</Button>
                </Link>
            </div>
        </Stack>
    );
}
export default CheckOutMusicBox;