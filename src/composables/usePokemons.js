import { reactive, toRefs, computed } from "vue";
import { useNickname } from "./useNickname";
let { calculateOffSet } = useNickname();
export function usePokemons() {
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

  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${calculateOffSet.value}`
  )
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

  const tryCatch = () => {
    state.successOrNot = Math.floor(Math.random() * state.randomCatch.length);
    state.startCatching = true;
  };
  const catchResult = computed(() => {
    return state.randomCatch[state.successOrNot];
  });

  return { ...toRefs(state), catchResult, tryCatch };
}
