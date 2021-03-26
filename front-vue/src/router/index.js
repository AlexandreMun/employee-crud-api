import { createRouter, createWebHistory } from 'vue-router';
import Nprogress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'List All Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Edit Employee',
    component: () => import('../components/edit-employee/EditEmployeeComponent'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Transitar entre páginas
router.beforeResolve((to, from, next) => {
  // Quando houver carregamento de uma página inicial, então usar o Nprogress
  if (to.name) {
    Nprogress.start();
  }
  next();
});

// Se a página não carregar por completo
router.afterEach((to, from) => {
  // Completa a animação da rota usando o progress bar
  Nprogress.done();
});

export default router;
