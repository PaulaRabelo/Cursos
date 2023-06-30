import styled from "styled-components";

export const PaginaPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 38vh;
    /* flex-direction: column; */
    padding: 10px;
    align-items: start;
    justify-items: stretch;
`
export const ImagemCard = styled.img`
    width: 15vw;
`
export const Detalhes = styled.button`
    border: 1.5px solid black;
    padding: 1px;
    text-align: center;
    height: 5vh;
    margin: 10px;
    width: 15vw;
    border-radius: 5px;
    background-color:  rgb(153, 255, 0);
    /* color: white; */
    font-weight: 600;
`

export const DivContainer=styled.div`
     border-style: solid;
    border-width: thin;
`