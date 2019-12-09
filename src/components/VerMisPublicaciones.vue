<template>
    <div>
      <h1>Mis publicaciones</h1>
      <hr />
      <div
         v-if="markers"
         v-for="marker in markers"
      >     
         <h5>Publicacion #{{ marker.id + 1 }}</h5>    
         <b-card
            class="mb-2"
         >
            <b-card-text>
               <p><strong>Marca:</strong> {{ marker.marca }}</p>
               <p><strong>Reservado: </strong>{{marker.reservado}}
               <p><strong>Modelo:</strong> {{ marker.modelo }}</p>
               <p><strong>Año:</strong> {{ marker.ano }}</p>
               <p><strong>Kilometros:</strong> {{ marker.km }} kms</p>
               <p><strong>Color:</strong> {{ marker.color }}</p>
               <p><strong>Precio:</strong> ${{ marker.precio }}</p>
               <p><strong>Longitud:</strong> {{ marker.coords.lng }}</p>
               <p class="mb-0"><strong>Latitud:</strong> {{ marker.coords.lat }}</p>
            </b-card-text>
         </b-card>
      </div>
      <!-- {{ a }}
      <hr />
      {{ markers }} -->
   </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
      return {
         markers: [],
      };
   },
   created: function() {
      axios.get('http://localhost:3000/markers')
         .then((response) => {
            this.markers = response.data.filter(marker => marker.dniContacto === JSON.parse(localStorage.getItem('usuarioDni')));
         })
   }
}
</script>