import { Detalhes, DivContainer, ImagemCard, PaginaPrincipal } from "./styles"


function Card(props) {

    return (
        <DivContainer>
            <PaginaPrincipal onClick={props.reproduz}>
                <ImagemCard src={props.link} alt=""/>
                <h4>{props.titulo}</h4>
            </ PaginaPrincipal>
            <Detalhes onClick={props.pageChange}>Detalhes</Detalhes>
        </DivContainer>
    )
}

export default Card