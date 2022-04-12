<template>
  <div>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="index">
        <h2>{{ pokemon.name }}</h2>
        <img :src="imageUrl + pokemon.id + '.png'" alt="pokemon image" />
        <p v-if="!startCatching"></p>
        <p v-else-if="Math.random() < 0.5">{{ succesCatch }}</p>
        <p v-else>{{ failCatch }}</p>
      </li>
    </ul>

    <button @click="tryCatch">Catch'em</button>
    <p style="color: transparent">{{ successOrNot }}</p>
  </div>
</template>

<script>
import { usePokemons } from "../composables/usePokemons";
export default {
  name: "Home",
  setup() {
    let { catchResult, tryCatch,imageUrl,nextUrl, ...toRefs } = usePokemons();
    return {
      ...toRefs,
      catchResult,
      tryCatch,
      imageUrl,
      nextUrl
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 30px;
  overflow: hidden;
}
li {
  width: 200px;
  height: 200px;
  border: 2px solid rgb(121, 121, 131);
  text-transform: capitalize;
}
img {
  display: flex;
  width: 100px;
  height: 100px;
  text-align: center;
  margin: auto;
}
</style>
