import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Input } from 'semantic-ui-react'

import './ItemCount.css'

export const ItemCount = ({stock, fnAddCart}) => {

    const [cantidad, setCantidad] = useState(0)
    const [blockMinus, setBlockMinus] = useState(true)
    const [blockAdd, setBlockAdd] = useState(stock === 0  ? true : false)
    

    useEffect(() => {
        if ( cantidad === 0) {
            setBlockAdd(false);
            setBlockMinus(true);
        }

        if ( cantidad >= stock ) {
            setBlockAdd(true);
            setBlockMinus(false);
        }
        
        if ( cantidad > 0 && cantidad < stock ) {
            setBlockAdd(false);
            setBlockMinus(false);
        }
    }, [cantidad, stock])

    const onMinus = () => {
        setCantidad( cantidad - 1 );
    }

    const onAdd = () => {
        setCantidad( cantidad + 1 );
    }

    const handlerAddCart = () => {
        fnAddCart(cantidad);
    }
    

    return (
        <div>
            <Button icon color='google plus' disabled={blockMinus} onClick={onMinus}>
                <Icon name='minus' />
            </Button>
            <Input disabled value={cantidad} />
            <Button icon color='green' disabled={blockAdd} onClick={onAdd}>
                <Icon name='add' />
            </Button>
            {
                cantidad > 0 &&
                    <Link to='/cart'>
                        <Button icon labelPosition='left' color='google plus' onClick={ handlerAddCart }>
                            <Icon name='shop' />  Añadir al Carrito
                        </Button>
                    </Link>
            }
        </div>
    )
}
