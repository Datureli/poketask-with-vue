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
import { reactive, toRefs, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const state = reactive({
      pokemons: [],
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      nextUrl: "",
      succesCatch: "Congratulation!",
      failCatch: "failure!",
      successOrNot: null,
      randomCatch: ["Congratulation", "failure"],
      startCatching: false,

    });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=[50]")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.nextUrl = data.next;
        data.results.forEach((pokemon) => {
          pokemon.id = pokemon.url
            .split("/")
            .filter(function (url) {
              return !!url;
            })
            .pop();

          state.pokemons.push(pokemon);
        });
      });
    console.log(tryCatch)

    const tryCatch = () => {
      state.successOrNot = Math.floor(Math.random() * state.randomCatch.length);
      state.startCatching = true
    };
    const catchResult = computed(() => {
      return state.randomCatch[state.successOrNot] || null;
    });

    return { ...toRefs(state), catchResult, tryCatch };
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
