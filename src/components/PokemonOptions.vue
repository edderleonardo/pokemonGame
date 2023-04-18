<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in capitalizePokemonName"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    capitalizePokemonName() {
      return this.pokemons.map((pokemon) => {
        pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        return pokemon;
      });
    },
  },
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
