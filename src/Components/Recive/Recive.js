import { Button } from "../Button/Button";
import { Main, Header } from "./Recive-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";


function Recive() {

    return (
        <Container>
            <Main>
                <Header>
                    <h1>
                        Nova entrada
                    </h1>
                </Header>
                <form>
                    <Input placeholder="Valor"/>
                    <Input placeholder="Descrição"/>
                    <Button>
                        Salvar entrada
                    </Button>
                </form>
            </Main>
        </Container>
    )
}

export default Recive;