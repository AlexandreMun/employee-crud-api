<template>
    <!-- INICIO NAVBAR -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a href="" class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node.js</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <routerLink class="nav-link" to="/">Create New Employee</routerLink>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <routerLink class="nav-link" to="/list-employees">List All Employees</routerLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIM NAVBAR -->
</template>
