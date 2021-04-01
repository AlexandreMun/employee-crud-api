import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './assets/icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
