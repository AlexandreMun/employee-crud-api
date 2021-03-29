import { createApp } from 'vue';
import VueSweetAlert2 from 'vue-sweetalert2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

library.add(faUserPlus, faUserEdit, faTrash);

const app = createApp(App);
app.use(router, VueSweetAlert2);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
