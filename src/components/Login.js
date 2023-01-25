import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(){

    const navigate = useNavigate();

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
            await axios.post(process.env.REACT_APP_API_URL, form);

        }catch(err){
            return alert(err)
        }
        navigate('/produtos');
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
    }
    button{
        width: 300px;
        height:40px;
        margin-bottom:10px;
        margin-top:20px;
        font-size:20px;
        font-weight:600;
        
    }
`