<template>
  <div>
    <h1>Welcome to your dashboard {{ welcome }}</h1>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
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
