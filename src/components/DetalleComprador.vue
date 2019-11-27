<template>
   <div>
      <h1>Detalles del vendedor</h1>
      <b-card
         class="mb-2"
      >
         <b-card-text>
            <p><strong>Nombre de contacto:</strong> {{ vendedores[$route.params.id].nombreContacto }}</p>
            <p><strong>Telefono de contacto:</strong> {{ vendedores[$route.params.id].telefonoContacto }}</p>
            <p><strong>Email de contacto:</strong> {{ vendedores[$route.params.id].emailContacto }}</p>
            <p class="m-0"><strong>Lugar de residencia:</strong> {{ vendedores[$route.params.id].residenciaContacto }}</p>
         </b-card-text>
      </b-card>
   </div>
</template>

<script>
import db from '../db.json';

export default {
   data() {
      return {
         vendedores: db.vendedores,
      };
   }
}
</script>
