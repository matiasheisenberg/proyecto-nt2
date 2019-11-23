<template>
  <div>
    <h1>Complete los siguientes datos obligatorios</h1>
    <b-container fluid>
      <b-form @submit="onSubmit">
        <b-row class="my-3">
          <b-col sm="3">
            <label>Marca del auto</label>
          </b-col>
          <b-col sm="9">
            <select required class="custom-select" v-model="auto.marca">
              <option disabled :value="null">Selecciona la marca del auto</option>
              <option v-for="marca in arrayDeMarcas" :key="marca.id" :value="marca">{{marca.texto}}</option>
            </select>
          </b-col>
        </b-row>

        <b-row class="my-3" v-if="auto.marca != null">
          <b-col sm="3">
            <label>Modelo:</label>
          </b-col>

          <b-col sm="9">
            <select required class="custom-select" v-model="auto.modelo">
              <option disabled :value="null">Selecciona el modelo del auto</option>
              <option
                v-for="modelo in auto.marca.modelos"
                :key="modelo.id"
                :value="modelo.texto"
              >
                {{modelo.texto}}
              </option>
            </select>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Año</label>
          </b-col>

          <b-col sm="9">
            <b-form-input required v-model="auto.ano" type="range" :min="añoMinimo" :max="añoMaximo"></b-form-input>
            <div class="mt-2">Año seleccionado: {{ auto.ano }}</div>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Kilometros:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="number" required placeholder="Ingresa los kilometros del auto" v-model="auto.km"></b-form-input>
          </b-col>
        </b-row>

         <b-row class="my-3">
          <b-col sm="3">
            <label>Color:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa el color del auto" v-model="auto.color"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Precio</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="number" required placeholder="Ingresa el precio del auto" v-model="auto.precio"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>URL de la foto del auto</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa la url de la imagen" v-model="auto.foto"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Longuitud</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa la longitud de la ubicacion" v-model="auto.coords.lng"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Latitud</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa la latitud de la ubicacion" v-model="auto.coords.lat"></b-form-input>
          </b-col>
        </b-row>

        <hr />

        <b-row class="my-3">
          <b-col sm="3">
            <label>Nombre</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa tu nombre" v-model="auto.nombreContacto"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Telefono de contacto</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="number" required placeholder="Ingresa un dato de contacto" v-model="auto.telefonoContacto"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Email de contacto</label>
          </b-col>
          <b-col sm="9">
            <b-form-input type="email" required placeholder="Ingresa un email" v-model="auto.emailContacto"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-3">
          <b-col sm="3">
            <label>Lugar de residencia</label>
          </b-col>
          <b-col sm="9">
            <b-form-input required placeholder="Ingresa un lugar de residencia" v-model="auto.residenciaContacto"></b-form-input>
          </b-col>
        </b-row>

        <b-button size="lg" type="submit" variant="primary" class="mb-2">Publicar el auto</b-button>

      </b-form>
    </b-container>
  </div>
</template>


<script>
import { marcas } from '../marcas';
import { markers } from '../markers';
import { vendedores } from '../vendedores';

export default {
  data() {
    return {
      name: "Vue.js",
      añoMinimo: null,
      añoMaximo: 2019,
      auto: {
        coords: { lat: null, lng: null },
        precio: null,
        km: null,
        marca: null,
        modelo: null,
        ano: null,
        foto: null,
        color: null,
        nombreContacto: null,
        telefonoContacto: null,
        emailContacto: null,
        residenciaContacto: null
      },
      arrayDeMarcas: marcas,
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
    },
    onSubmit(evt) {
      evt.preventDefault();

      this.auto.coords.lat = parseFloat(this.auto.coords.lat);
      this.auto.coords.lng = parseFloat(this.auto.coords.lng);
      this.auto.marca = this.auto.marca.texto;
      this.auto.id = markers[markers.length - 1].id + 1;
      vendedores.push({
        telefono: this.auto.telefonoContacto,
        email: this.auto.emailContacto,
        residencia: this.auto.residenciaContacto
      });

      markers.push(this.auto);

      this.$bvToast.toast(`Se publico el vehiculo correctamente`, {
        title: `Publicacion exitosa!!!`,
        variant: 'success',
        solid: true
      });

      this.auto.coords = { lat: null, lng: null };
      this.auto.precio = null;
      this.auto.km = null;
      this.auto.marca = null;
      this.auto.modelo = null;
      this.auto.ano = null;
      this.auto.foto = null;
      this.auto.color = null;
      this.auto.nombreContacto = null;
      this.auto.telefonoContacto = null;
      this.auto.emailContacto = null;
      this.auto.residenciaContacto = null;
    },
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