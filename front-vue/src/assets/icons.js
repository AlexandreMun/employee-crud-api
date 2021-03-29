/*
* Descrição: responsável pelo gerenciamento dos icones na aplicação
*/

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import App from '../App.vue';

library.add(faUserPlus, faUserEdit, faTrash);

const app = createApp(App);
