// src/main.ts

import { createApp } from 'vue';
import App from './App.vue';
import SampleComponent from './components/SampleComponent.vue';

const app = createApp(App);

app.component('sample-component', SampleComponent);

app.mount('#app');
