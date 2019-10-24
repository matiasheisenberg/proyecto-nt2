<template>
  <div
    id="app"
    class="container"
  >
    <h1>MapCars</h1>
   
    

    <p>Esta seccion es solo para mostrar que estamos en el componente que <mark>no cambia</mark></p>
    <ul class="nav nav-pills nav-fill">
      <router-link to="/" tag="li" exact class="nav-link">Home</router-link>
      <router-link to="/serie" tag="li" class="nav-link">Series</router-link>
      <router-link to="/matias" tag="li" class="nav-link">Matias</router-link>
      <router-link to="/fede" tag="li" class="nav-link">Fede</router-link>
      <router-link to="/yeff" tag="li" class="nav-link">Yeff</router-link>
      <router-link to="/ini" tag="li" class="nav-link">Ini</router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: "app"
};
</script>




