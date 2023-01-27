import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import ProdutoCarrinho from "./ProdutoCarrinho"

export default function ShoppingCartPage({ token }) {
    const [produtos, setProdutos] = useState([])

    useEffect(GetListProducts, [])

    function GetListProducts() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token.data}`
            }
        };
        axios.get(`${process.env.REACT_APP_API_URL}shopping-cart`, config)
            .then(res => {
                setProdutos(res.data)
            })
            .catch(err => console.log(err));
    }

    function DeleteProduct(nomeProduto) {
        const config = {
            headers: {
                "Authorization": `Bearer ${token.data}`
            }
        };
        const body = { name:nomeProduto }; 
        axios.post(`${process.env.REACT_APP_API_URL}shopping-cart`,body,config)
            .then(res => {
                GetListProducts();
                alert('Produto removido do carrinho com sucesso!')
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <NavbarContainer>
                <p>Mercado-Livro</p>
            </NavbarContainer>
            <ProdutosContainer>
                {
                    produtos.length == 0 ?
                        <p>Nenhum produto foi adionado ao carrinho</p>
                        : produtos.map((p, i) => {
                            return <ProdutoCarrinho key={i} name={p.name} image={p.image} price={p.price} DeleteProduct={DeleteProduct} />
                        })
                }
                {
                    produtos.length > 0 && <p>Total: R${produtos.reduce((a, produto) => a += Number(produto.price), 0)}</p>
                }
            </ProdutosContainer>
            <FinalizarCompraContainer>
                <button>Finalizar compra?</button>
            </FinalizarCompraContainer>
        </>
    )
}
const NavbarContainer = styled.div`
    width:100%;
    height:80px;
    position:fixed;
    top:0;
    left: 50%;
    transform: translate(-50%);
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:gold;
    p{
        color:purple;
        font-family: 'Fondamento', cursive;
        font-size:36px;
    }
`

const ProdutosContainer = styled.div`
    width:350px;
    margin:0 auto;
    margin-top:80px;
    gap:7px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    box-sizing:border-box;
    p{
        margin-top:10px;
        font-size:18px;
    }
`

const FinalizarCompraContainer = styled.div`
    position:fixed;
    bottom :10px;
    left: 50%;
    transform: translate(-50%);
    button{
        font-size:24px;
        width:350px;
        height:80px;
    }
`