import { ref, computed } from "vue";
let nickname = ref(null);
let activeLink = ref(false);
export function useNickname() {

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

  const refresh = computed(() => {
    return nickname
  })

  return { nickname, activeLink, isActive, error,refresh };
}
