import { Container } from '../Container/Container'
import { Main, Header, Historic, Transactions, Vazio, Cheio, Saldo, Entrada } from './Menu-style';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

function extrato(valor) {
    if (valor === 0) {
        return (
            <Vazio>
                <h1>Não há registros de entrada ou saída</h1>
            </Vazio>
        )
    }

    const valores = []

    for (let i = 0; i < 20; i++) {
        valores.push(
            {
                data: '15/06', descricao: 'posto de gasolina', valor: 'R$ 50,00'
            }
        )
    }

    return (
        <>
            <Cheio>
                <Entrada>
                    {valores.map(item => { return <p>{item.data}</p> })}
                </Entrada>
            </Cheio>
            <Saldo>
                <p>Saldo</p>
            </Saldo>
        </>
    )
}

function Menu() {

    const u = 1;

    return (
        <Container>
            <Main>
                <Header>
                    <h1>Olá, fulano!</h1>
                    <IoExitOutline size={25} color="#FFFFFF" />
                </Header>
                <Historic>
                    {(u === 0) ? extrato(0) : extrato(1)}
                </Historic>
                <Transactions>
                    <button>
                        <AiOutlinePlusCircle size={25} color="#FFFFFF" />
                        <p>Nova entrada</p>
                    </button>
                    <button>
                        <AiOutlineMinusCircle size={25} color="#FFFFFF" />
                        <p>Nova saída</p>
                    </button>
                </Transactions>
            </Main>
        </Container>
    )
}

export default Menu;