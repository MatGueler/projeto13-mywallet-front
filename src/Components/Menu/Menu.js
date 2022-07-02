import { Container } from '../Container/Container'
import { Main, Header, Historic, Transactions, Vazio, Cheio, Movimentation, Saldo, Statement } from './Menu-style';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useContext } from "react";
import TokenContext from "../Context/TokenContext";

function Extrato({ statement, setSaldo }) {

    let soma = 0

    function ConteudoExtrato({ item }) {

        if (item.type === 'recive') {

            return (
                <Cheio>
                    <Movimentation color={'green'}>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                        <p><span>R$ {Number(item.price).toFixed(2)}</span></p>
                    </Movimentation>
                </Cheio>
            )
        }
        if (item.type === 'pay') {

            return (
                <Cheio>
                    <Movimentation color={'red'}>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                        <p><span>R$ {Number(item.price).toFixed(2)}</span></p>
                    </Movimentation>
                </Cheio>
            )
        }

    }

    if (statement.length === 0) {
        return (
            <Vazio>
                <h1>Não há registros de entrada ou saída</h1>
            </Vazio>
        )
    }

    let valores = statement.map((item, index) => {
        if (item.type === 'recive') {
            soma += Number(item.price);
        } else {
            soma -= Number(item.price);
        }
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
    const { token, myName } = useContext(TokenContext)

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/menu', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        promise.then(res => {
            setStatement(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Main>
                <Header>
                    <h1>Olá, {myName}!</h1>
                    <IoExitOutline size={25} color="#FFFFFF" cursor='pointer' onClick={() => navigate('/')} />
                </Header>
                <Historic>
                    <Statement>
                        {< Extrato statement={statement} saldo={saldo} setSaldo={setSaldo} />}
                    </Statement>
                    <Saldo>
                        <p>SALDO</p>
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