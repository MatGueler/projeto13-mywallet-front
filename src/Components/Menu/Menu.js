import { Container } from '../Container/Container'
import { Main, Header, Historic, Transactions, Vazio, Cheio, Movimentation, Saldo } from './Menu-style';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Extrato({ statement, color, setColor, saldo, setSaldo }) {

    let soma = 0

    function ConteudoExtrato({ item }) {

        if (item.type === 'recive') {
            setColor('green')
        }

        return (
            <Cheio>
                <Movimentation color={color}>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                    <p><span>R$ {Number(item.price).toFixed(2)}</span></p>
                </Movimentation>
            </Cheio>
        )

    }

    if (statement.length === 0) {
        return (
            <Vazio>
                <h1>Não há registros de entrada ou saída</h1>
            </Vazio>
        )
    }

    let valores = statement.map((item, index) => {
        soma += Number(item.price);
        return < ConteudoExtrato key={index} item={item} />
    }
    )
    setSaldo(soma.toFixed(2))
    return (valores)
}

function Menu() {

    let navigate = useNavigate()

    const [statement, setStatement] = useState([])
    const [saldo, setSaldo] = useState(0)
    const [color, setColor] = useState('red')

    useEffect(() => {
        const promise = axios.get('http://localhost:5000/menu')

        promise.then(res => {
            setStatement(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Main>
                <Header>
                    <h1>Olá, fulano!</h1>
                    <IoExitOutline size={25} color="#FFFFFF" cursor='pointer' onClick={() => navigate('/')} />
                </Header>
                <Historic>
                    {< Extrato statement={statement} color={color} setColor={setColor} saldo={saldo} setSaldo={setSaldo} />}
                    <Saldo>
                        <p>Saldo</p>
                        <p>R$ {saldo}</p>
                    </Saldo>
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