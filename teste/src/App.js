import { useState } from "react";
import Footer from "./componentes/Footer/Footer";
// import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home/Home.js"
import "./style.css"
import StyledGlobal, { ContainerMain, TelaInteira } from "./styledGlobal";
import Detalhes from "./pagina/Detalhes/Detalhes";

function App() {

  const [trocarDePagina, setTrocarDePagina] = useState("0")

  const changePage = (change) => {
    setTrocarDePagina(change)
  }

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
      <StyledGlobal />
      <TelaInteira>

        {/* <Nav /> */}
        <div>

          <ContainerMain>

            {trocarDePagina === "0" ? (
              <Home
                reproduz={reproduzVideo}
                pagina={() => changePage("1")}
              />
            ) : (
              <Detalhes
                pagina={() => changePage("0")}
              />
            )}

          </ContainerMain>

          <Footer />
        </div>
      </TelaInteira >
    </>



  );
}

export default App;
