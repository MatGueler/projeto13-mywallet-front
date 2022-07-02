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
    height: 430px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    padding: 20px 5px 0 5px;
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
overflow: hidden;
overflow-y: scroll;
`

export const Movimentation = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;  

p {
    width: 100px;
    word-wrap:normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px; 
}

span {
    width: 100px;
    color: ${(props) => props.color};
    text-align: left;
    padding-left: 10px;
}
`

export const Saldo = styled.div`
width: 100%;
display: flex;
align-items: center;
position: absolute;
left: 20px;
bottom: 0;
height: 50px;

p {
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

