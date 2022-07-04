import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Main } from "./Register-style";
import { useState } from 'react'
import axios from "axios";


function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirm, setConfirm] = useState('')

    let navigate = useNavigate()

    function CreactAcount(event) {
        event.preventDefault();

        if (password.length < 6 || confirm !== password) {
            return alert('Digite os dados corretamente!')
        }
        const body = {
            email,
            password,
            name
        }

        const promise = axios.post('https://project-mywallet-back.herokuapp.com/cadastro', body)

        promise
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })



    }

    return (
        <Container>
            <Main>
                <h1>My Wallet</h1>
                <form onSubmit={CreactAcount}>
                    <Input type='text' placeholder="Nome" onChange={(e) => { setName(e.target.value) }} value={name} />
                    <Input type='email' placeholder="E-mail" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    <Input type='password' placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <Input type='password' placeholder="Confirme a senha" onChange={(e) => { setConfirm(e.target.value) }} value={confirm} />
                    <Button>Cadastrar</Button>
                </form>
                <h2 onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</h2>
            </Main>
        </Container>
    )
}

export default Register;