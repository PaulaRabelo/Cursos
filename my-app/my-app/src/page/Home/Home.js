import Card from "../../componentes/Card/Card"

function Home(props) {
    console.log(props)

    return (
        <section class="painel-de-videos">

            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 1"}
             imagem={"https://picsum.photos/400/400?a=1 "}
             />

            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 2"}
             imagem={"https://picsum.photos/400/400?a=2 "}
             />
            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 3"}
             imagem={"https://picsum.photos/400/400?a=3 "}
             />

            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 4"}
             imagem={"https://picsum.photos/400/400?a=4 "}
             />
            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 5"}
             imagem={"https://picsum.photos/400/400?a=5 "}
             />

            <Card
             reproduz={props.reproduz}
             titulo={"Título do vídeo 6"}
             imagem={"https://picsum.photos/400/400?a=6 "}
             />
           

            
        </section>

    )
}

export default Home