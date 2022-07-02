import { Button } from "../Button/Button";
import { Main, Header } from "./Pay-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Pay() {

    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    let navigate = useNavigate()

    function Finish(event) {
        event.preventDefault();

        if (price.length === 0 || isNaN(Number(price))) {
            return alert('Informe os dados corretamente!')
        }

        const body = {
            price,
            description,
            type: 'pay'
        }

        const promise = axios.post('http://localhost:5000/saida', body)

        promise.then(res => {
            console.log(res.data)
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
                </Header>
                <form onSubmit={Finish}>
                    <Input type='text' placeholder="Valor" onChange={(e) => { setPrice(e.target.value) }} value={price} />
                    <Input type='text' placeholder="Descrição" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    <Button>
                        Salvar saída
                    </Button>
                </form>
            </Main>
        </Container>
    )
}

export default Pay;