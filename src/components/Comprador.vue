<template>
  <div>
    <h1>Encontra el auto que estas buscando</h1>
    <b-card
      class="mb-2"
      v-if="showInfo"
    >
      <b-card-text>
        <!-- <p><strong>Marca:</strong> {{markerSelected.marca}}</p> -->
        <p><strong>Modelo:</strong> {{markerSelected.modelo}}</p>
        <p><strong>Año:</strong> {{markerSelected.ano}}</p>
        <p><strong>Kilometros:</strong> {{markerSelected.km}}</p>
        <p><strong>Color:</strong> {{markerSelected.color}}</p>
        <p><strong>Precio:</strong> {{markerSelected.precio}}</p>
        <b-button @click="reservar(markerSelected.id)" :disabled="reservarBtnDisabled" variant="primary">
          Reservar vehiculo
        </b-button>
        <b-button class="ml-2">
          <router-link :to="{ name: 'detallecomprador', params: { id: markerSelected.id } }" style="color: white">
            Detalles del vendedor
          </router-link>
        </b-button>
      </b-card-text>
    </b-card>
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 600px; margin-bottom: 16px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        v-if="!m.reservado"
        :position="m.coords"
        :clickable="true"
        :draggable="false"
        :icon="m.foto"
        @click="test(m)" 
        style="width: 72px; height: 72px"
      >
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
import { markers } from '../markers';

export default {
  data() {
    return {
      center: { lat: -34.60903, lng: -58.447861 },
      reservarBtnDisabled: false,
      showInfo: false,
      markers: markers,
      markerSelected: null,
    };
  },
  methods: {
    test(marker) {
      this.center = marker.coords;
      this.markerSelected = markers[marker.id],
      this.showInfo = true;
    },
    // Método que recibe por parámetro el id del vehículo, para hacer 
    reservar(id) {
      markers[id].reservado = true;
      this.reservarBtnDisabled = true; 

      this.$bvToast.toast(`El vehiculo ${markers[id].marca} ${markers[id].modelo} ${markers[id].ano} fue reservada.`, {
        title: `Reserva exitosa!!!`,
        variant: 'success',
        solid: true
      });
    }
  }
};
</script>

<style>
