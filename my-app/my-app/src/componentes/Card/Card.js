
function Card(props){
    return(
        <div class="box-pagina-principal media1" onClick={props.reproduz}>
                <img src={props.imagem} alt=""></img>
                <h4>{props.titulo}</h4>
        </div>
    )
}


export default Card