import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    console.log('passou no cadastro')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function submitForm(e){
        e.preventDefault();

        try{
            await axios.post(`${process.env.REACT_APP_API_URL}sign-up`, form);

        }catch(err){
            return alert(err)
        }
        navigate('/');
    }

    return(
        <>
            <form onSubmit={submitForm}>
                <input
                    type='name'
                    name='name'
                    onChange={handleForm}
                    placeholder='Nome'    
                />
                <input
                    type='email'
                    name='email'
                    onChange={handleForm}
                    placeholder='E-mail'    
                />
                <input
                    type='password'
                    name='password'
                    onChange={handleForm}
                    placeholder='Senha'    
                />
                <input
                    type='password'
                    name='confirm'
                    onChange={handleForm}
                    placeholder='Confirmar senha'    
                />
                <button type="submit">
                    Cadastrar
                </button>
                <Link to='/'>Já tem cadastro? Faça login.</Link>
            </form>
        </>
    )
}

const StyledSignUp = styled.div`
    
`