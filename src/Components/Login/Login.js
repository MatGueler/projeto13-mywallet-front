import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Input } from '../Input/Input'
import { Button } from "../Button/Button";
import { Main } from "./Login-style";
import axios from 'axios'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    function signUp(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }
        if (password.length < 6) {
            alert('Digite os dados corretamente!')
        }
        else {

            const promise = axios.post('http://localhost:5000/', body)

            promise.then(res => {
                console.log(res.data)
                navigate('/menu')
            })
                .catch(err => {
                    console.log(err)
                })

        }
    }


    return (
        <Container>
            <Main>
                <h1>My Wallet</h1>
                <form onSubmit={signUp}>
                    <Input type='email' placeholder="E-mail" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type='password' placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Button>Entrar</Button>
                </form>
                <h2 onClick={() => navigate('/cadastro')}>Primeira vez? Cadastre-se!</h2>
            </Main>
        </Container>
    )
}

export default Login;