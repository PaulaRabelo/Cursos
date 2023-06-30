import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { DivDetails, ImgDetails, TextAbilities, TextDetails } from "./styles"


// PokemonDetails.js
function PokemonDetails({ pokemon, goBack }) {


    return (
        <div>
            <Header
                goBack={goBack}
            />
            <DivDetails>
                <TextDetails>Detalhes</TextDetails>
                <div>
                    <div>
                        <ImgDetails src={pokemon.sprites?.front_default} alt={pokemon.name} />
                        <ImgDetails src={pokemon.sprites?.back_default} alt={pokemon.name} />
                    </div>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <TextAbilities>Habilidades: {pokemon.abilities}</TextAbilities>
                </div>

            </DivDetails>
        </div>)

}

export default PokemonDetails
