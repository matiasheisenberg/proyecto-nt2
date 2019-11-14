<template>
  <div>
    <h1>Complete los siguientes datos obligatorios</h1>
    <b-container fluid>
      <b-row class="my-1">
        <label for="input-none">Marca:</label>

        <select class="custom-select" v-model="auto.marcaSeleccionada">
          <option v-for="marca in arrayDeMarcas" :key="marca.id" :value="marca">{{marca.texto}}</option>
        </select>
      </b-row>
      <samp>{{auto}}</samp>
      <b-row class="my-1" v-if="auto.marcaSeleccionada != null">
        <b-col sm="3">
          <label for="input-valid">Modelos:</label>
        </b-col>

        <select class="custom-select" v-model="auto.modeloSeleccionado">
          <option
            v-for="modelo in auto.marcaSeleccionada.modelos"
            :key="modelo.id"
            :value="modelo.id"
          >{{modelo.texto}}</option>
        </select>

        <!-- <select class="custom-select">
         

          <option value="3">Z4</option>
          <option value="3">GS</option>
          <option value="3">RT</option>
        </select>-->
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="range-1">Año</label>
          <b-form-input id="range-1" v-model="auto.año" type="range" :min="añoMinimo" :max="añoMaximo"></b-form-input>
          <div class="mt-2">Año: {{ auto.año }}</div>
        </b-col>

        <b-col sm="9">
          <b-form-input id="input-invalid"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Kilometros:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="input-invalid" v-model="auto.km"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Precio</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="input-invalid" v-model="auto.precio"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Datos de contacto</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="input-invalid" v-model="auto.contacto"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">Longuitud</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="input-invalid"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-invalid">latitud</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="input-invalid"></b-form-input>
        </b-col>
      </b-row>
    </b-container>

    <b-dropdown id="dropdown-1" text="Tipos de Automoviles" class="m-md-2">
      <b-dropdown-item on:click="greet">Automovil coupe</b-dropdown-item>
      <b-dropdown-item>Automovil cuatro puertas</b-dropdown-item>
      <b-dropdown-item>Camioneta 4x4</b-dropdown-item>
      <b-dropdown-item>Camioneta Suv</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
    </b-dropdown>

    <router-link to="Confirmacion">
      <b-button variant="dark">Siguiente</b-button>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "Vue.js",
      añoMinimo: null,
      añoMaximo:2019,
      auto: {
        precio: null,
        km: null,
        marcaSeleccionada: null,
        modeloSeleccionado: null,
        año: null,
        contacto:null
      },
      arrayDeMarcas: [
        {
          id: 1,
          texto: "honda",
          modelos: [{ id: 1, texto: "Accord" }, { id: 2, texto: "500" }]
        },
        {
          id: 2,
          texto: "chevrolet",
          modelos: [{ id: 3, texto: "Corza" }, { id: 4, texto: "Cruze" }]
        }
      ]
    };
  },
  // define métodos dentro del objeto `methods`
  methods: {
    greet: function(event) {
      // `this` dentro de los métodos apunta a la instancia de Vue
      alert("Hello " + this.name + "!");
      // `event` es el evento nativo del DOM
      if (event) {
        alert(event.target.tagName);
      }
    }
  },
  created() {
    //Hacemos todo lo necesario antes de que se vea la pagina.
    let añoMinimoDesdeServicio = 1885 //VENDRIA DESDE UN SERVICIO
    let añoMaximoDesdeServicio = 2019 //VENDRIA DESDE UN SERVICIO
    this.añoMinimo = añoMinimoDesdeServicio;
    this.añoMaximo = añoMaximoDesdeServicio;
    this.auto.año = añoMinimoDesdeServicio;
  }
};
</script>