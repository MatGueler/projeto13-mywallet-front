import { Button } from "../Button/Button";
import { Main, Header } from "./Recive-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Recive() {

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
            type: 'recive'
        }

        const promise = axios.post('http://localhost:5000/entrada', body)

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
                        Nova entrada
                    </h1>
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