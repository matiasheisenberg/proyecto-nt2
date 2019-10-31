<template>
  <div
    id="app"
  >
    <b-img class="banner-img" src="https://picsum.photos/1024/400/?image=41" fluid-grow alt="Responsive image"></b-img>
    
    <div class="container">
      <h1>MapCars</h1>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item >
              <router-link to="/comprador" >Comprador</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link to="/vendedor" >Vendedor</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <ul class="nav nav-pills nav-fill">
        <router-link to="/" tag="li" exact class="nav-link">Home</router-link>
        <router-link to="/serie" tag="li" class="nav-link">Series</router-link>
        <router-link to="/matias" tag="li" class="nav-link">Matias</router-link>
        <router-link to="/fede" tag="li" class="nav-link">Fede</router-link>
        <router-link to="/yeff" tag="li" class="nav-link">Yeff</router-link>
        <router-link to="/ini" tag="li" class="nav-link">Ini</router-link>
        <router-link to="/comprador" tag="li" class="nav-link">Comprador</router-link>
        <router-link to="/vendedor" tag="li" class="nav-link">Vendedor</router-link>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .banner-img {
    height: 200px;
  }
</style>

<script>
export default {
  name: "app"
};
</script>




