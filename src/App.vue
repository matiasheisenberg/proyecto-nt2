<template>
  <div
    id="app"
  >
    <b-img class="banner-img" src="https://i2.wp.com/empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg?ssl=1" fluid-grow alt="Responsive image"></b-img>
    
    <div class="container">
      <center><h1>MapCars</h1></center>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item >
            <router-link to="/" >Home</router-link>
          </b-nav-item>
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
        <router-link to="/serie" tag="li" class="nav-link">Series</router-link>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .banner-img {
    max-width: 50%; 
    height: auto;
    
  }

  
</style>

<script>
export default {
  name: "app"
};
</script>




