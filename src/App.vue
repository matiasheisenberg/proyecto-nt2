<template>
  <div
    id="app"
  >
    <b-img class="banner-img" src="https://www.interfilm.cl/wp-content/uploads/2018/09/interfilm-banner-auto.jpg" fluid-grow alt="Responsive image"></b-img>
    <div class="container">
      <center><h1>MapCars</h1></center>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" >Home</router-link>
          </b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item>
              <router-link to="/comprador">Compra tu proximo auto</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <router-link to="/vendedor" >Vende tu auto</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          
        </b-navbar-nav>
      </b-navbar>
     
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .banner-img {
    max-width: 50%; 
    height: 50vh !important;
  }
</style>

<script>
export default {
  name: "app"
};
</script>




