import { HeaderContainer } from "./styled"


function Header(){

    return(
        <HeaderContainer>
        <h1>Video</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"></input>
       </HeaderContainer>
    )
}

export default Header