import { Container } from '../Container/Container'
import { Main, Header, Historic, Transactions, Vazio, Cheio, Movimentation, Saldo, Entrada } from './Menu-style';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function extrato(valor, { saldo, setSaldo }) {

    let total = 0

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
                data: '15/06', descricao: 'posto de gasolina', valor: 50
            }
        )
    }

    return (
        <>
            <Cheio>
                <Entrada>
                    {valores.map((item, index) => {
                        return <Movimentation key={index}>
                            <p>{item.data}</p>
                            <p>{item.descricao}</p>
                            <p>R$ {item.valor}</p>
                        </Movimentation>
                    })}
                </Entrada>
            </Cheio>
            <Saldo>
                <p>Saldo</p>
                <p>R$ {saldo}</p>
            </Saldo>
        </>
    )
}

function Menu() {

    let navigate = useNavigate()

    const [saldo, setSaldo] = useState(0)

    const u = 1;

    return (
        <Container>
            <Main>
                <Header>
                    <h1>Olá, fulano!</h1>
                    <IoExitOutline size={25} color="#FFFFFF" cursor='pointer' onClick={() => navigate('/')} />
                </Header>
                <Historic>
                    {(u === 0) ? extrato(0) : extrato(1, { saldo, setSaldo })}
                </Historic>
                <Transactions>
                    <button onClick={() => navigate('/entrada')}>
                        <AiOutlinePlusCircle size={25} color="#FFFFFF" />
                        <p>Nova entrada</p>
                    </button>
                    <button onClick={() => navigate('/saida')} >
                        <AiOutlineMinusCircle size={25} color="#FFFFFF" />
                        <p>Nova saída</p>
                    </button>
                </Transactions>
            </Main>
        </Container >
    )
}

export default Menu;