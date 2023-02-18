<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Locadora de Veículos</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/new"
              >Novo Veículo</router-link
            >
            <router-link class="nav-link" to="/">Catálogo</router-link>
          </li>
        </ul>
      </div>


    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>