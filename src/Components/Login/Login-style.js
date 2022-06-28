import styled from "styled-components";

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 20px;
box-sizing: border-box;

h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
    margin-bottom: 40px;
}

h2 {
    font-size: 15px;
    margin-top: 40px;
    color: #FFFFFF;
    cursor: pointer;
}

h2:hover {
    text-decoration: underline;
}

form {
    width: 100%;
}
`