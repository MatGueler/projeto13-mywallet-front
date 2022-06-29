import { Button } from "../Button/Button";
import { Main, Header } from "./Recive-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Recive() {

    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    let navigate = useNavigate()

    function Finish(event) {
        event.preventDefault();

        if (value.length === 0 || isNaN(Number(value))) {
            return alert('Informe os dados corretamente!')
        }

        const body = {
            value,
            description,
            type: 'recive'
        }

        console.log(body)

        navigate('/menu')
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
                    <Input type='text' placeholder="Valor" onChange={(e) => { setValue(e.target.value) }} value={value} />
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