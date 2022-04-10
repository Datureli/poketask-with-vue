<template>
  <div>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="index">
        <h2>{{ pokemon.name }}</h2>
        <img :src="imageUrl + pokemon.id + '.png'" alt="dsada" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "Home",
  setup() {
    const state = reactive({
      pokemons: [],
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      nextUrl: "",
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
    return { ...toRefs(state) };
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
}
img {
  display: flex;
  width: 100px;
  height: 100px;
  text-align: center;
  margin: auto;
}
</style>
