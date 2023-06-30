import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Nav from "./componentes/Nav/Nav";
import Home from "./page/Home/Home";
import "./style.css"
import StyledGlobal, { TelaInteira } from "./styledGlobal";

function App() {

 
    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido")
    }
 
  return (
    <>
    <StyledGlobal/>
      <body>
        <TelaInteira>
         <Header/>

          <main>
           <Nav/>

          <Home reproduz={reproduzVideo} />
          </main>

         <Footer/>
        </TelaInteira>
      </body>



    </>
  );
}

export default App;
