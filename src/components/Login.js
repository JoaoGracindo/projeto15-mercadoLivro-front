import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";

import authContext from '../authContext.js'

export default function Login(){

    const navigate = useNavigate();
    const {setToken} = useContext(authContext)

    const [form, setForm] = useState({
        email: '',
        password: ''
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
            const promise = await axios.post(process.env.REACT_APP_API_URL, form);
            console.log(promise.data)
            setToken(promise);
            
        }catch(err){
            return alert(err);
        }
        navigate('/shopping-cart');
    }

    return(
        <StyledLogin>
            <form onSubmit={submitForm}>
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
                <button type="submit">
                    Entrar
                </button>
                <Link to='/sign-up'>Não tem cadastro? Clique Aqui.</Link>
            </form>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
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