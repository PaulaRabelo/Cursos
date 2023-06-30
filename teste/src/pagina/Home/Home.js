import Card from "../../componentes/Card/Card"
import { PainelDeVideo } from "./styles"
import React from "react"
import Header from "../../componentes/Header/Header"
import Nav from "../../componentes/Nav/Nav"


function Home(props){

    // console.log(props.reproduz)

    const handlePageChange = ()=>{
        props.pagina()
    }

    return(
        <>
         <Nav />
        <Header/>
        <PainelDeVideo>

            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=1"}
            titulo={"Título do vídeo 1"}
            pageChange={handlePageChange}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=2"}
            titulo={"Título do vídeo 2"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=3"}
            titulo={"Título do vídeo 3"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=4"}
            titulo={"Título do vídeo 4"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=5"}
            titulo={"Título do vídeo 5"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=6"}
            titulo={"Título do vídeo 6"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=7"}
            titulo={"Título do vídeo 7"}
            />
            <Card  
            reproduz={props.reproduz}
            link={"https://picsum.photos/400/400?a=8"}
            titulo={"Título do vídeo 8"}
            />
    </PainelDeVideo>
        </>
    )
}


export default Home