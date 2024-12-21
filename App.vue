

<script setup>
import Hello from './components/Mainheader.vue'
import { useDisplay } from 'vuetify';
import { computed } from 'vue';
const { name } = useDisplay();
const displaySize = computed(() => {
  switch (name.value) {
    case 'xs':
      return 'xs';
    case 'sm':
      return 'sm';
    case 'md':
      return 'md';
    case 'lg':
      return 'lg';
    case 'xl':
      return 'xl';
  }
  return undefined;
});
</script>

<template>
  <v-app>
    <Hello />
    <v-main class="container">
      <div class="ly-inner">
        <router-view :class="displaySize"></router-view>
        </div>
      </v-main>
  </v-app>
</template>

<style scoped>

</style>