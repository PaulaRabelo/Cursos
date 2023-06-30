import { ContainerHeader } from "./styles"

function Header() {

    return(
        <ContainerHeader>
            <h1>Video</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </ContainerHeader>
    )
}

export default Header