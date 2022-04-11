<template>
  <div>
    <h1>Welcome to your dashboard {{ nickname }}</h1>
  </div>
</template>

<script>
//import Pokemons from './Pokemons.vue'
import { useNickname } from "../composables/useNickname";
import { computed } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup() {
     let { nickname,  } = useNickname()
    return {
      welcome,
      nickname
    };
  },
};
</script>
