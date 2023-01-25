import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp(){
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