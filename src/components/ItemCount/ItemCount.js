import React, { useState } from 'react'
import { Button, Icon, Image, Input, Segment } from 'semantic-ui-react'

import './ItemCount.css'

export const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1)
    const [blockMinus, setBlockMinus] = useState(true)
    const [blockAdd, setBlockAdd] = useState(stock === 0  ? false : true)
    

    const onMinus = () => {
        if ( contador === 1) {
            setBlockAdd(false);
            setBlockMinus(true);
        } else {
            setBlockMinus(false);
            setBlockAdd(false);
            setContador( contador - 1 )
        }
    }

    const onAdd = () => {
        if ( stock <= contador ) {
            setBlockAdd(true);
        } else {
            setContador( contador + 1 )
            setBlockMinus(false);
        }
    }

    

    return (
        <div className='div'>
            <Segment className='segment' >
                <div>
                    <h2>Contador</h2>
                    <h4>Stock disponible: { stock }</h4>
                    <Image className="ui centered medium image"
                        src='https://cdn.shopify.com/s/files/1/0426/9209/articles/e-commerce-el-presente-y-el-futuro-de-las-ventas-en-linea_960x502_crop_center.png?v=1597172403960w' 
                        size='tiny' circular />
                    <Button icon color='google plus' disabled={blockMinus} onClick={onMinus}>
                        <Icon name='minus' />
                    </Button>
                    <Input disabled value={contador} />
                    <Button icon color='green' disabled={blockAdd} onClick={onAdd}>
                        <Icon name='add' />
                    </Button>
                </div>
                <div className='shop'>
                    <Button icon labelPosition='left' color='google plus'>
                        <Icon name='shop' />  Añadir al Carrito
                    </Button>
                </div>
            </Segment>
        </div>
    )
}
