import { createApp } from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './assets/icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

const app = createApp(App);
app.use(router, VueSweetAlert2);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
