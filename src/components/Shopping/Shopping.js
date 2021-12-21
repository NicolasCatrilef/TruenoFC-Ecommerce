import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, Message, Select } from 'semantic-ui-react'

import './Shopping.css';

//FireBase
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

//Context
import { CartContext } from '../Context/CartContext'

const initialState = {
	name: '',
	lastName: '',
	adress: '',
	email: '',
    phone: ''
};

const initialErrorState = {
	errorName: false,
	errorLastName: false,
	errorAdress: false,
	errorEmail: false,
    errorPhone: false,
    
};

export const Shopping = () => {

    const [form, setForm] = useState(initialState);
    const [validate, setValidate] = useState(initialErrorState);
    const { errorName,	errorLastName, errorAdress, errorEmail, errorPhone } = validate
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState('');
    let date = new Date();
    date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

    const [ items, setItems ] = useContext(CartContext);

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

    const handlerInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
    
    const submitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);

        const order = {
            buyer: form,
            items: {...items, date, total }
        }

		const docRef = await addDoc(collection(db, 'orders'), {
			order,
		});
		
		setOrder(docRef);
		setTimeout(() => {
			setLoading(false);
			setForm(initialState);
		}, 1000);
	};



    return (
        <div>
            <Form className='form-container' loading={loading} onSubmit={submitHandler}>
                <h2 style={{ 'align-self': 'baseline' }}>Datos de Despacho</h2>
                <Input className='form-input' fluid label='Nombre' placeholder='Nombre' name='name' value={form.name} onChange={handlerInput} error={errorName}/>
                <Input className='form-input' fluid label='Apellido' placeholder='Apellido' name='lastName' value={form.lastName} onChange={handlerInput} error={errorLastName}/>
                <Input className='form-input' fluid label='Dirección' placeholder='Dirección' name='adress' value={form.adress} onChange={handlerInput} error={errorAdress}/>
                <Input className='form-input' fluid label='Email' placeholder='Email' name='email' value={form.email} onChange={handlerInput} error={errorEmail}/>
                <Input className='form-input' fluid label='Teléfono' placeholder='Teléfono' name='phone' value={form.phone} onChange={handlerInput} error={errorPhone}/>
                <Button className='form-btn' color='google plus' content='Confirmar' />
            </Form>
            {
                order.id &&
                    <div>
                        <Message success header='El N° de orden es :' content={order.id} style={{ display: 'inline-block' }} />
                    </div>
            }

        </div>
    )
}
