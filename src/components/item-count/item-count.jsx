import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import { useState} from "react";
import Swal from "sweetalert2";


function ItemCountMusicBox(props){

    const {min, max, onAdd} = props;
    const [amount, setAmount] = useState(min);
    const increaseAmount = ()=>{
        amount >= max ? setAmount(amount) : setAmount(amount+1)
    }
    const decreaseAmount = ()=>{
        amount <= min ? setAmount(amount) : setAmount(amount-1)
    }



    return(
        <Container style={{padding:"0px"}}>
            <Row>
                <Col>
                    <Button className={"btn-primary"} style={{width:"30px", height:"30px", padding:"0px"}}
                            onClick={decreaseAmount}>-</Button>
                    <span style={{paddingInline:"10px"}}>{amount}</span>
                    <Button className={"btn-danger"} style={{width:"30px", height:"30px", padding:"0px"}}
                            onClick={increaseAmount} >+</Button>
                    <Button className={"btn-success"} style={{margin:"5px", height:"30px", paddingTop:"0px",
                        paddingBottom:"0px", paddingLeft:"3px", paddingRight:"3px" }} onClick={()=>{
                        Swal.fire({
                            title: '¿Está seguro de adicionar al carrito?',
                            showDenyButton: true,
                            showCancelButton: false,
                            confirmButtonText: 'Si, guardar!',
                            denyButtonText: `No`,
                        }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                onAdd(amount);
                                Swal.fire('Elemento adicionado!', '', 'success');
                            } else if (result.isDenied) {
                                Swal.fire('Elemento descartado', '', 'info')
                            }
                        })
                        }}
                            >Agregar al carrito</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemCountMusicBox;