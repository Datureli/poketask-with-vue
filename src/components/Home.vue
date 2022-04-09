<template>
  <div>
    <h1>Welcome</h1>
    <p>What is your name?</p>
    <div class="buttonGroup">
      <label for="name">
        <input type="text" placeholder="your nickname" v-model="nickname" />
      </label>
      <button>continue</button>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let nickname = ref(null);
    const error = computed(() => {
      return nickname.value === "" ? "The nickname is required" : "";
    });
    return { nickname, error };
  },
};
</script>

<style>
.buttongroup {
  width: 300px;
  display: grid;
  margin: auto;
}
.error {
  margin-top: 5px;
  color: #ff0000;
}
</style>
