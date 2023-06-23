import { ContainerHeader, ImagemLogo } from "./styles"
import logo from "../../assets/logo.svg"

function Header(){

    return(
     <ContainerHeader>
        <ImagemLogo src={logo}/>
     </ContainerHeader>
    )
}

export default Header