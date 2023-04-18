<template>
  
  <h1 v-if="!pokemon">Espere por favor</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    {{ counter }}
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection=checkAnswer />
    <h2>{{ message }}</h2>
    <button @click="newGame">Nuevo Juego</button>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      counter: 0,
      message: '',
      pokemon: null,
      pokemonArr: [],
      showAnswer: false,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = pokemonId === this.pokemon.id
      if (!this.showPokemon) {
        this.counter = this.counter + 1;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.pokemon = null;
      this.counter = 0;
      this.mixPokemonArray();
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
