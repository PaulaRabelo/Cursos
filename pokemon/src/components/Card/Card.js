import { ButtonDetails, ContainerCard, DivPokemon, Image, TextCard } from "./styles";

const typeColorMapping = {
    fire: '#F9A05F',
    water: '#5DB4B4',
    grass: '#609757',
    bug: "#6d61c8",
    normal: "#ea6a0ec8"
};

function Card({ pokemon, onDetailsClick }) {
    const color = typeColorMapping[pokemon.types.split('/')[0]];
    return (
        <ContainerCard color={color}>
            <TextCard>
                <p>#{pokemon.id}</p>
                <h2>{pokemon.name}</h2>
                <p>{pokemon.types}</p>
                <ButtonDetails onClick={() => onDetailsClick(pokemon)}>Detalhes</ButtonDetails>
            </TextCard>

            <DivPokemon>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
            </DivPokemon>
        </ContainerCard>
    );
}

export default Card;
