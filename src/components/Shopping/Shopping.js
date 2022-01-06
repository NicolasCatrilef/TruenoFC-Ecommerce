import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, Input, Message, Select } from 'semantic-ui-react'

import './Shopping.css';

//FireBase
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

//Context
import { CartContext } from '../Context/CartContext'

// FORMIK
import { useFormik } from "formik";
import * as Yup from "yup";
import { InfoMessage } from '../InfoMessage/InfoMessage';

const initialValues = {
	name: '',
	lastName: '',
	adress: '',
	email: '',
    repeatEmail: '',
    phone: ''
};


export const Shopping = () => {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("Campo obligatorio"),
            lastName: Yup.string().required("Campo obligatorio"),
            adress: Yup.string().required("Campo obligatorio"),
            email: Yup.string().email("Email no válido").required("Campo obligatorio").oneOf([Yup.ref("repeatEmail")], "Email no coincide con la repetición"),
            repeatEmail: Yup.string().email("Texto Ingresado no es Email válido").required("Campo obligatorio").oneOf([Yup.ref("email")], "Repetición no coincide con el Email"),
            phone: Yup.number().required("Campo obligatorio"),
        }),
        onSubmit: async (formData) => {
    		setForm(formData);
    		setLoading(true);
        }, 
    })

    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(true);
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
    }, [items]);

    useEffect(() => {
        (loading) && sendData();
    }, [loading])

    useEffect(() => {
        (order.id) && setView(false);
    }, [order])

    const sendData = async () => {

        const order = {
            buyer: form,
            items: {...items, date, total }
        }

		const docRef = await addDoc(collection(db, 'orders'), {
			order,
		});
		
		setOrder(docRef);
        setLoading(false);
	};

    return (
        <>
            {
                view ? (
                    <div className='formulario'>
                        <h1>Datos de Despacho</h1>
                        <Form style={{ width: "30%"}} onSubmit={formik.handleSubmit} loading={loading}>
                            <Form.Input fluid label='Nombres' placeholder='Ingrese Nombre' name="name" onChange={formik.handleChange} error={formik.errors.name && true} value={formik.values.name}/>
                            <Form.Input fluid label='Apellidos' placeholder='Ingrese Apellidos' name="lastName" onChange={formik.handleChange} error={formik.errors.lastName && true} value={formik.values.lastName}/>
                            <Form.Input fluid label='Dirección' placeholder='Ingrese Dirección' name="adress" onChange={formik.handleChange} error={formik.errors.adress && true} value={formik.values.adress}/>
                            <Form.Input fluid label='Email' placeholder='Ingrese Email' name="email" onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email}/>
                            <Form.Input fluid label='Reingrese Email' placeholder='Ingrese Email' name="repeatEmail" onChange={formik.handleChange} error={formik.errors.repeatEmail} value={formik.values.repeatEmail}/>
                            <Form.Input fluid label='Teléfono' placeholder='Ingrese Teléfono' name="phone" onChange={formik.handleChange} error={formik.errors.phone && true} value={formik.values.phone}/>
                            <Button type="submit" color='primary' content='Confirmar' />
                            <Button type="button" color='second' content='Limpiar Formulario' onClick={formik.handleReset}/>
                        </Form>
                    </div>
                ) : (
                    <InfoMessage type={'order'} order={order.id} />
                )
            }
        </>
    )
}
