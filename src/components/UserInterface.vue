<template>
  <div>
    <h1>Welcome to your dashboard {{ welcome }}</h1>
    <Pokemons />
  </div>
</template>

<script>
import Pokemons from './Pokemons.vue'
import { computed } from "vue";
export default {
    components: {
        Pokemons
    },
  props: {
    nickname: {
      type: String,
    },
  },
  setup(props) {
    let welcome = computed(() => {
      return props.nickname;
    });

    return {
      welcome,
    };
  },
};
</script>
