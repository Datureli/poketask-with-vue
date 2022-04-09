<template>
  <div>
    <h1>Welcome</h1>
    <p>What is your name?</p>
    <div class="buttonGroup">
      <label for="name">
        <input
          type="text"
          placeholder="your nickname"
          v-model="nickname"
          @keyup="error"
        />
      </label>
      <button type="submit">
        <router-link class="activeStatus" v-if="isActive" to="/userinterface"
          >Continue</router-link
        >
        <span v-else>Continue</span>
      </button>

      <div class="error" v-if="error">
        {{ error }}
      </div>
      <UserInterface :key="nickname" :nickname="nickname" />
    </div>
  </div>
</template>

<script>
import UserInterface from "./UserInterface.vue";
import { ref, computed } from "vue";
export default {
  components: {
    UserInterface,
  },
  setup() {
    let nickname = ref(null);
    let activeLink = ref(false);

    const isActive = computed(() => {
      return nickname.value === null
        ? (activeLink = false)
        : nickname.value === ""
        ? (activeLink = false)
        : (activeLink = true);
    });

    const error = computed(() => {
      return nickname.value === "" ? "The nickname is required" : "";
    });

    return { nickname, error, activeLink, isActive };
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
.activeStatus {
  text-decoration: none;
  color: #008000;
}
</style>
