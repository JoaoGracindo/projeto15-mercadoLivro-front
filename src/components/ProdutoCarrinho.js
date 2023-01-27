import styled from "styled-components"
import { FaTrashAlt } from 'react-icons/fa';

export default function ProdutoCarrinho({ name, price, image ,DeleteProduct}) {
    return (
        <>
            <ProdutoContainer>
                <img src={image} alt={''} />
                <NomePrecoContainer>
                    <h1>{name}</h1>
                    <p>R${Number(price).toFixed(2)}</p>
                </NomePrecoContainer>
                <button onClick={()=>DeleteProduct(name)}><FaTrashAlt /></button>
            </ProdutoContainer>
        </>
    )
}

const ProdutoContainer = styled.div`
    width:350px;
    height:100px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:2px solid goldenrod;
    border-radius:5px;
    background-color:violet;
    box-sizing:border-box;
    img{
        max-height:80px;
        max-width:100px;
        border-radius:7px;
    }
    button{
        height:30px;
        width:30px;
    }
`

const NomePrecoContainer = styled.div`
    height:100%;
    gap:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    h1{
        font-size:16px;
    }
    p{
        font-size:16px;
    }
`