import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp(){

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    function handleForm(){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function submitForm(e){
        e.preventDefault();

        
    }

    return(
        <StyledSignUp>
            <form>
                <input/>
                <input/>
                <input/>
                <input/>
                <button type="submit">
                    Cadastrar
                </button>
                <Link to='/'>Já tem cadastrp? Faça login.</Link>
            </form>
        </StyledSignUp>
    )
}

const StyledSignUp = styled.div`
    
`