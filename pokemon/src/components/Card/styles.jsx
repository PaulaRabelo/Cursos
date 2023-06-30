import styled from "styled-components"
import pokebola from "../../assets/pokebola.png"

export const ContainerCard = styled.div`
    background-color: ${props => props.color};
    width: 25vw;
    height: 25vh;
    border-radius: 5px;
    box-shadow: 5px 5px 10px black;
    display: flex;
    gap: 5px;
    align-items: center;

`
export const TextCard = styled.div`
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
  
    gap: 15px;
`

export const ButtonDetails=styled.button`
    border-radius: 5px;
    border: none;
    margin-top: 3vh;
    width: 8vw;
    height: 4vh;
    background-color: #512a0e;
    font-weight: 600;
    font-size: 20px;
    color: white;
    text-shadow: 3px 2px 5px black;
`

export const DivPokemon = styled.div`
    background-image: url(${pokebola});
    background-repeat: no-repeat;
    background-position: 5%;
    background-size: 11.5vw;
    display: flex;
    flex-direction: column;
    margin-left: 3vw;
`

export const Image = styled.img`
    width: 12vw;
    height: 24vh;
`