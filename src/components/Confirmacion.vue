<template>
    <div  class="card">
  <div class="card-header">
      <h1 class="card-header">Estas seguro de subir </h1>
  </div>
       

      
       
          
      <b-row>
      <b-col lg="4" class="pb-2"><b-button  variant="dark" >Aceptar</b-button></b-col>
       <b-col lg="4" class="pb-2"><b-button variant="dark" >Cancelar</b-button></b-col>
  
</b-row>



    </div>
</template>





<script>
export default {
  el: 'b-dropdown-item', 

data: {
    name: 'Vue.js'
   
  },
  // define métodos dentro del objeto `methods`
  methods: {
    greet: function (event) {
      // `this` dentro de los métodos apunta a la instancia de Vue
      alert('Hello ' + this.name + '!')
      // `event` es el evento nativo del DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>