<!-- src/App.vue -->

<template>
  <div id="app">
    <sample-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SampleComponent from './components/SampleComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SampleComponent,
  },
});
</script>

<style>
/* Add your global styles here */
</style>
