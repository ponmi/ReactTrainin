import { useState, useRef } from 'react';
import TextForm from './TextForm';

export default function TextFormRender() {
    const [form, setForm] = useState({
        name: ""
    });

    const name = useRef(null);
    const defaultValue = "hoge";

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () =>{
        console.log(`こんにちは、${form.name}さん`);
    }
    return (
        <>
            <TextForm
                textId={"name"}
                textLabel={"名前"}
                textName={"name"}
                onChange={handleForm}
                // textValue={form.name}
                show={show}
                ref={name}
                defaultValue={defaultValue}
            ></TextForm>
        </>
    )
}