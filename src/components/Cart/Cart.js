import React, { useContext, useEffect, useState } from 'react'
import { Button, Header, Image, Table } from 'semantic-ui-react'

import { CartContext } from '../Context/CartContext'


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
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            Productos en Carrito
                            <Button icon='eraser' floated='right' color='black' size='small' onClick={clearProducts} />
                        </Table.HeaderCell>
                        {/* <Table.HeaderCell ></Table.HeaderCell> */}
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Producto</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Cantidad</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Precio</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>SubTotal</Table.HeaderCell>
                        <Table.HeaderCell/>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        items.map( item =>
                            <Table.Row key={item.id}>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src={item.img} rounded size='mini' />
                                        <Header.Content>
                                            {item.name}
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{currency(item.price)}</Table.Cell>
                                <Table.Cell>{item.quantity}</Table.Cell>
                                <Table.Cell>{currency(item.price * item.quantity)}</Table.Cell>
                                <Table.Cell collapsing>
                                    <Button id={ item.id } icon='trash' color='google plus' size='small' onClick={removeProduct} />
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3' textAlign='right'>Total</Table.HeaderCell>
                        <Table.HeaderCell colspan='2'>{currency(total)}</Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
