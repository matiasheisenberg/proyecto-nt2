<template>
  <div>
    <h1>Encontra el auto que estas buscando</h1>
    <b-row>
      <b-col sm="4">
        <b-card
          v-if="showInfo"
        >
          <b-card-text>
            <!-- <p><strong>Marca:</strong> {{markerSelected.marca}}</p> -->
            <p><strong>Marca:</strong> {{markerSelected.marca}}</p>
            <p><strong>Modelo:</strong> {{markerSelected.modelo}}</p>
            <p><strong>Año:</strong> {{markerSelected.ano}}</p>
            <p><strong>Kilometros:</strong> {{markerSelected.km}}</p>
            <p><strong>Color:</strong> {{markerSelected.color}}</p>
            <p><strong>Precio: </strong> ${{markerSelected.precio}}</p>
            <b-button @click="reservar" variant="primary">
              Reservar vehiculo
            </b-button>
            <b-button class="mt-2">
              <router-link :to="{ name: 'detallecomprador', params: { id: markerSelected.id } }" style="color: white">
              Detalles del vendedor
              </router-link>
            </b-button>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col sm="8">
        <GmapMap
          :center="center"
          :zoom="12"
          map-type-id="terrain"
          style="width: 100%; height: 700px; margin-bottom: 16px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            v-if="!m.reservado"
            :position="m.coords"
            :clickable="true"
            :draggable="false"
            :icon="m.foto"
            @click="clickMarker(m)" 
            style="width: 72px; height: 72px"
          >
          </GmapMarker>
        </GmapMap>
      </b-col>
    </b-row>
    <b-modal
      ok-only
      no-close-on-backdrop
      ref="modal"
      v-model="modalShow"
      title="Necesitamos tu email"
      @ok="handleModalOk"
    >
      <form ref="form" @submit.stop.prevent="handleModalSubmit">
        <b-form-group
          :state="emailIngresadoState"
          label="Email"
          label-for="email-input"
          invalid-feedback="El email es requerido"
        >
          <b-form-input
            id="email-input"
            type="email"
            v-model="emailIngresado"
            :state="emailIngresadoState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      center: { lat: -34.60903, lng: -58.447861 },
      reservarBtnDisabled: false,
      showInfo: false,
      modalShow: false,
      emailIngresado: null,
      emailIngresadoState: null,
      markers: [],
      markerSelected: null,
    };
  },
  created: function() {
    axios.get('http://localhost:3000/markers')
      .then((response) => {
        this.markers = response.data;
      })
  },
  methods: {
    clickMarker(marker) {
      this.center = marker.coords;
      this.markerSelected = this.markers[marker.id],
      this.showInfo = true;
    },
    // Método que recibe por parámetro el id del vehículo, para hacer 
    reservar() {
      this.modalShow = true;
    },
    handleModalOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      // Trigger submit handler
      this.handleModalSubmit();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();

      this.emailIngresadoState = valid ? 'valid' : 'invalid';

      return valid;
    },
    handleModalSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }

      this.markerSelected.reservado = true;
      this.reservarBtnDisabled = true; 

      this.$bvToast.toast(`El vehiculo ${this.markerSelected.marca} ${this.markerSelected.modelo} ${this.markerSelected.ano} fue reservada.`, {
        title: `Reserva exitosa!!!`,
        variant: 'success',
        solid: true
      });

      window.location.href = `mailto:${this.emailIngresado}?&subject=Reserva del Vehiculo ${this.markerSelected.marca} ${this.markerSelected.modelo}&body=Se adjuntan los datos de la reserva realizada. Vehiculo: ${this.markerSelected.marca} ${this.markerSelected.modelo} Año: ${this.markerSelected.ano} Kilometros: ${this.markerSelected.km} Color: ${this.markerSelected.color} Precio: ${this.markerSelected.precio}`;

      this.modalShow = false;
    }
  }
};

</script>

<style>
