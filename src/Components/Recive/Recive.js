import { Button } from "../Button/Button";
import { Main, Header } from "./Recive-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai'
import TokenContext from "../Context/TokenContext";


function Recive() {

    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const { token } = useContext(TokenContext)

    let navigate = useNavigate()

    function Finish(event) {
        event.preventDefault();

        const EMPTY = price.length === 0
        const ISNUMBER = isNaN(Number(price))
        const SYMBOLS = (price.includes('-') || (price.includes('+')))

        if (EMPTY || ISNUMBER || SYMBOLS) {
            return alert('Informe os dados corretamente!')
        }

        const body = {
            price,
            description,
            type: 'recive'
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post('http://localhost:5000/entrada', body, config)

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
                        Nova entrada
                    </h1>
                    <AiOutlineCloseSquare size={25} cursor='pointer' onClick={() => navigate('/menu')} color='#FFFFFF' />
                </Header>
                <form onSubmit={Finish}>
                    <Input type='text' placeholder="Valor" onChange={(e) => { setPrice(e.target.value) }} value={price} />
                    <Input type='text' placeholder="Descrição" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    <Button>
                        Salvar entrada
                    </Button>
                </form>
            </Main>
        </Container>
    )
}

export default Recive;