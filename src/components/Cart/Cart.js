import React, { useContext, useEffect, useState } from 'react'
import { Button, Header, Icon, Image, Message, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//Context
import { CartContext } from '../Context/CartContext'

import './Cart.css'



export const Cart = () => {

    const [ items, setItems, removeItem, clear ] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (items.length > 0) {
            let finalTotal = 0;
            items.forEach( item => {
                const totalProduct = item.price * item.quantity;
                finalTotal = finalTotal + totalProduct;
            });
            setTotal(finalTotal);
        }
    }, [items])

    const currency = (number) =>{
        return new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'clp', minimumFractionDigits: 0}).format(number);
    };

    const removeProduct = (e) => {
        const itemID = e.currentTarget.id;
        removeItem(itemID);
    };

    const clearProducts = (e) => {
        clear();
    };

    return (
        <div className='ItemList'>
            {
                items.length > 0 ? (
                    <>
                        <Table celled striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5'>
                                        Productos en Carrito
                                        <Button icon='eraser' floated='right' color='black' size='small' onClick={clearProducts} />
                                    </Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>Producto</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Precio</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Cantidad</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>SubTotal</Table.HeaderCell>
                                    <Table.HeaderCell/>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    items.map( item =>
                                        <Table.Row key={item.id}>
                                            <Table.Cell textAlign='center'>
                                                <Header as='h4' image>
                                                    <Image src={item.img} rounded size='mini' />
                                                    <Header.Content>
                                                        {item.name}
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell textAlign='center' >{currency(item.price)}</Table.Cell>
                                            <Table.Cell textAlign='center' >{item.quantity}</Table.Cell>
                                            <Table.Cell textAlign='center' >{currency(item.price * item.quantity)}</Table.Cell>
                                            <Table.Cell textAlign='center' collapsing>
                                                <Button id={ item.id } icon='trash' color='google plus' size='small' onClick={removeProduct} />
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>

                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='3' textAlign='right'>Total</Table.HeaderCell>
                                    <Table.HeaderCell colspan='2'textAlign='center'>{currency(total)}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        <Link to="/shopping">
                            <Button icon labelPosition='right' color='google plus'>
                                Datos Despacho
                                <Icon name='right arrow' />
                            </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Message icon className='message'>
                            <Icon name='cart' />
                            <Message.Content>
                                <Message.Header>Productos en Carrito</Message.Header>
                                No tiene productos añdadidos, favor vuelva a seleccionar sus productos preferidos
                            </Message.Content>
                        </Message>
                        <Link to={'/'}>
                            <Button color='google plus'>
                                Volver
                            </Button>
                        </Link>
                    </>
                )
            }
            
        </div>
    )
}
