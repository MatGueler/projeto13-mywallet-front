import styled from 'styled-components'


export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    box-sizing: border-box;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

h1 {
    font-size: 26px;
    color: #FFFFFF;
}
`

export const Historic = styled.div`
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    padding-top: 20px;
    position: relative;
`

export const Vazio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    font-size: 20px;
    color: #868686;
`

export const Cheio = styled.div`
width: 100%;
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 0 5px;
box-sizing: border-box;
`

export const Movimentation = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;  

p:first-child {
    width: 90px;
    word-break:break-all;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 10px;
}

p {
    width: 90px;
    word-break:break-all;
    font-size: 10px;
    text-align: center;
}

span {
    width: 100%;
    color: ${(props) => props.color};
    text-align: right;
    padding: 0 10px;
}
`

export const Statement = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    margin-bottom: 50px;
`

export const Saldo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
bottom: 0;
height: 50px;
padding: 0 5px;
box-sizing: border-box;

p {
    width: 100px;
    word-break:break-all;
    font-size: 17px;
    font-weight: 700;
}
`

export const Transactions = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;

    button {
        width: 48%;
        height: 115px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 0;
        padding: 0 10px;
        background-color: #A328D6;
        border-radius: 5px;
        cursor: pointer;
        
    }

    p {
        text-align: start;
        width: 80px;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: bold;
    }
`

