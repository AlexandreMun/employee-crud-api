import { createApp } from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router, VueSweetAlert2);
app.mount('#app');
