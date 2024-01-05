import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import KodlamaIOTextInput from '../utilities/customFormControls/KodlamaIOTextInput';

export default function ProductAdd() {
    const initialValues ={
        title:"",
        description:"",
        category:""
    };

    const schema=Yup.object({
        title: Yup.string().required("Ürün adı zorunludur"),
        description : Yup.string(),
        category:Yup.string().required("Ürün kategorisi zorunludur")
    })

  return (
   <>
    <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values)=>{
            console.log(values)
        }}
    >
        <Form className='ui form'>
            <KodlamaIOTextInput name="title"/>
            <KodlamaIOTextInput name="description"/>
            <KodlamaIOTextInput name="category"/>

            
            <Button color='green' type='submit'>Ürünü ekle</Button>
        </Form>
    </Formik>

   </>
  )
}
