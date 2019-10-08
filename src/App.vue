<template>
  <div
    id="app"
    class="container"
  >
    <h1>App.vue</h1>
    <p>Esta seccion es solo para mostrar que estamos en el componente que <mark>no cambia</mark></p>
    <ul class="nav nav-pills nav-fill">
      <router-link to="/" tag="li" exact class="nav-link">Home</router-link>
      <router-link to="serie" tag="li" class="nav-link">Series</router-link>
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

<style>
</style>
