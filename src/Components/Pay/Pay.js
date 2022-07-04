import { Button } from "../Button/Button";
import { Main, Header } from "./Pay-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai'
import TokenContext from "../Context/TokenContext";


function Pay() {

    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [disable, setDisable] = useState(false)
    const { token } = useContext(TokenContext)

    let navigate = useNavigate()

    function Finish(event) {
        event.preventDefault();

        setDisable(!disable);

        const EMPTY = price.length === 0
        const ISNUMBER = isNaN(Number(price))
        const SYMBOLS = (price.includes('-') || (price.includes('+')))

        if (EMPTY || ISNUMBER || SYMBOLS) {
            return alert('Informe os dados corretamente!')
        }

        const body = {
            price,
            description,
            type: 'pay'
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post('https://project-mywallet-back.herokuapp.com/saida', body, config)

        promise.then(res => {
            navigate('/menu')
        })
            .catch(err => { console.log(err) })
    }

    return (
        <Container>
            <Main>
                <Header>
                    <h1>
                        Nova saída
                    </h1>
                    <AiOutlineCloseSquare size={25} cursor='pointer' onClick={() => navigate('/menu')} color='#FFFFFF' />
                </Header>
                <form onSubmit={Finish}>
                    <Input type='text' placeholder="Valor" onChange={(e) => { setPrice(e.target.value) }} value={price} disabled={disable} />
                    <Input type='text' placeholder="Descrição" onChange={(e) => { setDescription(e.target.value) }} value={description} disabled={disable} />
                    <Button disabled={disable} onClick={() => setDisable(!disable)}>
                        Salvar saída
                    </Button>
                </form>
            </Main>
        </Container>
    )
}

export default Pay;