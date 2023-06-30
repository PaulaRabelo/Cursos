import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import axios from "axios";
import Header from "../../components/Header/Header";
import logo from "../../assets/logo.svg"
import { ButtonPage, ContainerHome, DivButtonPage } from "./styles";


function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  // A razão pela qual se inicia com null é que não há um Pokémon selecionado inicialmente. Ou seja, no momento em que o componente é montado, nenhum Pokémon foi ainda selecionado pelo usuário.
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState(0);
  const pokemonPage = 20;

  const fetchPokemon = (page) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPage}&offset=${page * pokemonPage}`)
      .then(res => {
        // console.log(res.data.results)
        // Finalmente, Promise.all() é uma função que aceita um array de Promises (que é o que res.data.results.map(...) retorna) e retorna uma nova Promise que é resolvida quando todas as Promises no array são resolvidas. O resultado desta Promise é um array que contém os resultados de todas as Promises no array original.
        Promise.all(res.data.results.map(pokemon =>
          axios.get(pokemon.url)
            .then(res => {
              const { data } = res
              data.abilities = data.abilities.map(a => a.ability.name).join(', ')
              data.types = data.types.map(t => t.type.name).join('/')
              console.log(pokemon.url)
              return data
            })

        ))
          .then(pokemonData => setPokemonList(pokemonData))
          .catch(err => console.error(err));
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    // buscarpokemon
    fetchPokemon(page);
  }, [page]);

  if (selectedPokemon) {
    return <PokemonDetails pokemon={selectedPokemon}
      goBack={() => setSelectedPokemon(null)} />;
  }

  return (
    <>
      <Header logo={logo} />
      <ContainerHome>
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} onDetailsClick={setSelectedPokemon} />
        ))}
      </ContainerHome>
      <DivButtonPage>
        {/* empedir que o número seja menor que zero, por isso o zero ai */}
        <ButtonPage onClick={() => setPage(oldPage => Math.max(oldPage - 1, 0))}>Anterior</ButtonPage>
        <ButtonPage onClick={() => setPage(oldPage => oldPage + 1)}>Próximo</ButtonPage>
      </DivButtonPage>
    </>
  );
}

export default PokemonList;
