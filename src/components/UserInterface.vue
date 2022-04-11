<template>
  <div>
    <h1>Welcome to your dashboard {{ nickname }}</h1>
    <Pokemons />
  </div>
</template>

<script>
import Pokemons from './Pokemons.vue'
import { useNickname } from "../composables/useNickname";
export default {
  components: {
    Pokemons
  },
  props: {
    modelValue: String,
  },
  setup() {
     let { nickname,  } = useNickname()
    return {
      nickname
    };
  },
};
</script>
