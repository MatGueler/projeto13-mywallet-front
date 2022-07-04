import { Container } from '../Container/Container'
import { Main, Header, Historic, Transactions, Vazio, Cheio, Movimentation, Saldo, Statement } from './Menu-style';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { IoClose } from 'react-icons/io5'
import Loading from '../Loading/Loading';
import TokenContext from "../Context/TokenContext";

function Extrato({ statement, setStatement, setSaldo, token }) {

    let sum = 0

    function ConteudoExtrato({ item }) {

        function DeleteTransfer() {

            let confirmation = window.confirm('Deseja apagar essa transferência?')

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    transferId: item._id
                }
            }

            if (confirmation) {
                const promise = axios.delete('https://project-mywallet-back.herokuapp.com/menu', config)
                    .then(res => {
                        setStatement(res.data)
                    }).catch(err => console.log(err))
            }
        }

        if (item.type === 'recive') {

            return (
                <Cheio>
                    <Movimentation color={'#03AC00'}>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                        <p>R$ {Number(item.price).toFixed(2)}</p>
                    </Movimentation>
                    <IoClose cursor='pointer' onClick={DeleteTransfer} />
                </Cheio>
            )
        }
        if (item.type === 'pay') {

            return (
                <Cheio>
                    <Movimentation color={'#C70000'}>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                        <p>R$ {Number(item.price).toFixed(2)}</p>
                    </Movimentation>
                    <IoClose cursor='pointer' onClick={DeleteTransfer} />
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

    let values = statement.map((item, index) => {
        if (item.type === 'recive') {
            sum += Number(item.price);
        } else {
            sum -= Number(item.price);
        }
        return < ConteudoExtrato key={index} item={item} />
    }
    )
    setSaldo(sum.toFixed(2))
    return (values)
}

function Menu() {

    let navigate = useNavigate()

    const [statement, setStatement] = useState([])
    const [saldo, setSaldo] = useState(0)
    const [loading, setLoading] = useState(true)
    const { token, myName } = useContext(TokenContext)

    useEffect(() => {

        const promise = axios.get('https://project-mywallet-back.herokuapp.com/menu', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        promise.then(res => {
            setStatement(res.data)
            setLoading(!loading)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {loading ? <Loading /> : ''}
            <Main>
                <Header>
                    <h1>Olá, {myName}!</h1>
                    <IoExitOutline size={25} color="#FFFFFF" cursor='pointer' onClick={() => navigate('/')} />
                </Header>
                <Historic>
                    <Statement>
                        {< Extrato statement={statement} setStatement={setStatement} saldo={saldo} setSaldo={setSaldo} token={token} />}
                    </Statement>
                    {(saldo >= 0) ?
                        <Saldo color='#03AC00'>
                            <p>SALDO</p>
                            <p>R$ {saldo}</p>
                        </Saldo> :
                        <Saldo color='#C70000'>
                            <p>SALDO</p>
                            <p>R$ {saldo}</p>
                        </Saldo>}
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