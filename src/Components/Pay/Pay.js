import { Button } from "../Button/Button";
import { Main, Header } from "./Pay-style";
import { Container } from "../Container/Container";
import { Input } from "../Input/Input";


function Pay() {

    return (
        <Container>
            <Main>
                <Header>
                    <h1>
                        Nova saída
                    </h1>
                </Header>
                <form>
                    <Input placeholder="Valor" />
                    <Input placeholder="Descrição" />
                    <Button>
                        Salvar saída
                    </Button>
                </form>
            </Main>
        </Container>
    )
}

export default Pay;