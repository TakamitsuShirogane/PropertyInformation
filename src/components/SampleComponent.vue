<!-- src/components/SampleComponent.vue -->

<template>
    <div>
      <h1>Sample Vue Component</h1>
      <button @click="fetchData">Fetch Data from API</button>
      <div v-if="apiData">
        <p>{{ apiData.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        apiData: null,
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('http://localhost:8000/api/sample');
          const data = await response.json();
          this.apiData = data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  