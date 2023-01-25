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
        <StyledSignUp>
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
        </StyledSignUp>
    )
}

const StyledSignUp = styled.div`
margin: auto;

form{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top:120px;
}
input{
    width: 300px;
    height:40px;
    margin-bottom:10px;
    padding-left:1%;
    border-radius:5px;
    border: 1px solid grey;
}
button{
    width: 300px;
    height:40px;
    margin-bottom:10px;
    margin-top:20px;
    font-size:20px;
    font-weight:600;
    border-radius:5px;
    border: 1px solid grey;
    
}
a{
    text-decoration:none;
}
`