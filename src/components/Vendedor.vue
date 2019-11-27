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

        <div v-if="!usuarioEncontrado">
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

          <b-row class="my-3">
            <b-col sm="3">
              <label>DNI</label>
            </b-col>
            <b-col sm="9">
              <b-form-input required placeholder="Ingresa su DNI" v-model="auto.dniContacto"></b-form-input>
            </b-col>
          </b-row>
        </div>

        <b-button size="lg" type="submit" variant="primary" class="mb-2">Publicar el auto</b-button>

      </b-form>

       <b-modal
        ok-only
        no-close-on-backdrop
        ref="modal"
        v-model="modalShow"
        title="Aseguremos tu identidad"
        @ok="handleModalOk"
      >
        <form ref="form" @submit.stop.prevent="handleModalSubmit">
          <b-spinner v-if="loading" label="Spinning"></b-spinner>
          <b-form-group
            :state="dniIngresadoState"
            label="DNI"
            label-for="dni-input"
            invalid-feedback="El DNI es requerido"
            v-if="!loading"
          >
            <b-form-input
              id="dni-input"
              v-model="dniIngresado"
              :state="dniIngresadoState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </b-container>

  </div>
</template>


<script>
import db from '../db.json';

export default {
  data() {
    return {
      añoMinimo: null,
      añoMaximo: 2019,
      modalShow: localStorage.getItem('usuarioEncontrado') ? false : true,
      loading: false,
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
        residenciaContacto: null,
        dniContacto: null,
      },
      dniIngresado: localStorage.getItem('usuarioEncontrado') ? JSON.parse(localStorage.getItem('usuarioDni')) : null,
      dniIngresadoState: null,
      usuarioEncontrado: localStorage.getItem('usuarioEncontrado') ? JSON.parse(localStorage.getItem('usuarioEncontrado')) : false,
      arrayDeMarcas: db.marcas,
    };
  },
  // define métodos dentro del objeto `methods`
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();

      this.auto.dniState = valid ? 'valid' : 'invalid';

      return valid;
    },
    handleModalOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      // Trigger submit handler
      this.handleModalSubmit();
    },
    handleAutenticacion() {
      const usuario = db.vendedores.find(vendedor => vendedor.dniContacto === parseInt(this.dniIngresado));
      
      if (usuario) {
        this.usuarioEncontrado = true;
        this.auto.nombreContacto = usuario.nombreContacto;
        this.auto.telefonoContacto = usuario.telefonoContacto;
        this.auto.emailContacto = usuario.emailContacto;
        this.auto.residenciaContacto = usuario.residenciaContacto;
        this.auto.dniContacto = usuario.dniContacto;

        this.$bvToast.toast(`Es bueno verte volver`, {
          title: `Hola, ${usuario.nombreContacto}`,
          variant: 'success',
          toaster: 'b-toaster-top-center',
          solid: true
        });
      } else {
        this.$bvToast.toast(`Asegurate de agregar tus datos al publicar un vehiculo`, {
          title: `No encontramos cuenta con tus datos`,
          variant: 'danger',
          toaster: 'b-toaster-top-center',
          solid: true
        });
      }

      localStorage.setItem('usuarioEncontrado', this.usuarioEncontrado);
      localStorage.setItem('usuarioDni', this.auto.dniContacto);

      this.modalShow = false;

      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide()
      });
    },
    handleModalSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      
      // Show loader
      this.loading = true;

      this.handleAutenticacion();
    },
    onSubmit(evt) {
      evt.preventDefault();
      
      const usuario = db.vendedores.find(vendedor => vendedor.dniContacto === this.dniIngresado);

      this.auto.coords.lat = parseFloat(this.auto.coords.lat);
      this.auto.coords.lng = parseFloat(this.auto.coords.lng);
      this.auto.marca = this.auto.marca.texto;
      this.auto.id = db.markers[db.markers.length -1].id + 1;

      // Subimos los datos del vendedor si no existe
      // Si existe cargamos los datos del vendedor
      if (!this.usuarioEncontrado) {
        db.vendedores.push({
          id: db.vendedores[d.vendedores.length -1].id + 1,
          nombreContacto: this.auto.nombreContacto,
          telefonoContacto: parseInt(this.auto.telefonoContacto),
          emailContacto: this.auto.emailContacto,
          residenciaContacto: this.auto.residenciaContacto,
          dniContacto: this.auto.dniContacto,
        });
      } else {
        this.auto.nombreContacto = usuario.nombreContacto;
        this.auto.telefonoContacto = usuario.telefonoContacto;
        this.auto.emailContacto = usuario.emailContacto;
        this.auto.residenciaContacto = usuario.residenciaContacto;
        this.auto.dniContacto = usuario.dniContacto;
      }

      // Subimos los datos del nuevo marker
      db.markers.push(this.auto);

      // Mostramos un mensaje de exito
      this.$bvToast.toast(`Se publico el vehiculo correctamente`, {
        title: `Publicacion exitosa!!!`,
        variant: 'success',
        solid: true
      });

      // Resetiamos todos los valores por default
      //this.auto.coords = { lat: null, 
      //lng: null };
      //this.auto.precio = null;
      //this.auto.km = null;
      //this.auto.marca = null;
      //this.auto.modelo = null;
      //this.auto.ano = null;
      //this.auto.foto = null;
      //this.auto.color = null;
      //this.auto.nombreContacto = null;
      //this.auto.telefonoContacto = null;
      //this.auto.emailContacto = null;
      //this.auto.residenciaContacto = null;
    },
  },
  created() {
    // Hacemos todo lo necesario antes de que se vea la pagina.
    let añoMinimoDesdeServicio = 1885 // VENDRIA DESDE UN SERVICIO
    let añoMaximoDesdeServicio = 2019 // VENDRIA DESDE UN SERVICIO
    this.añoMinimo = añoMinimoDesdeServicio;
    this.añoMaximo = añoMaximoDesdeServicio;
    this.auto.año = añoMinimoDesdeServicio;
  }
};
</script>