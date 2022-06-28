import { Container } from "../Container/Container";
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Main } from "./Register-style";


function Register() {
    return (
        <Container>
            <Main>
                <h1>My Wallet</h1>
                <form>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" />
                    <Input placeholder="Confirme a senha" />
                    <Button>Cadastrar</Button>
                </form>
                <h2>Já tem uma conta? Entre agora!</h2>
            </Main>
        </Container>
    )
}

export default Register;