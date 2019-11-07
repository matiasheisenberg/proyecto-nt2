<template>
  <div>
    
    <h1>Encontra el auto que estas buscando</h1>
    
    <b-card
    @click="test(m)"
    title= ""
    img.src = objImagen
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     <p>{{infoMarkerMarca}}</p>
     <p>{{infoMarkerModelo}}</p>
    <p>{{infoMarkerAño}}</p>
    <p>{{infoMarkerKilometros}}</p>
    <p>{{infoMarkerColor}}</p>
    <p>{{infoMarkerPrecio}}</p>
    </b-card-text>

    <b-button href="#" variant="primary">Info Vendedor</b-button>
  </b-card>
    
 

    
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 800px; height: 600px"
      
      
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.coords"
        :clickable="true"
        :draggable="false"
        :icon="m.iconImage"
        @click="test(m)"
        
      >

      </GmapMarker>
    
     

    
    </GmapMap>
  </div>
  
    
</template>



<script>
export default {
  data() {
    return {
      center: { lat: -34.60903, lng: -58.447861 },
      infoMarker:"",
      markers: [
        {
          coords: { lat: -34.609648, lng: -58.429089 },
          iconImage:
            "https://www.iconninja.com/files/595/83/747/mercedes-benz-icon.png",
          contentMarca: "Mercedes Benz",
          contentFoto:
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2020/collections/3-2/20_frd_f15_ps34_rptr_scc5_fprb_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg",
          contentModelo: "C250 COUPE",
          contentAño: "2012",
          contentKilometros: "Kilometros: 50.000",
          contentColor: "Blanco",
          contentPrecio: "$50.000"
        },
        {
          coords: { lat: -34.605174, lng: -58.432752 },
          iconImage:
            "https://cdn.iconscout.com/icon/free/png-256/ford-1-202767.png",
          contentMarca: "Ford",
          contentFoto:
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2020/collections/3-2/20_frd_f15_ps34_rptr_scc5_fprb_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg",
          contentModelo: "Focus",
          contentAño: "2014",
          contentKilometros: "Kilometros: 25.000",
          contentColor: "Gris",
          contentPrecio: "$30.000"
        },
        {
          coords: { lat: -34.605421, lng: -58.417517 },
          iconImage:
            "https://cdn.iconscout.com/icon/free/png-256/jeep-59-202822.png",
          contentMarca: "Jeep",
          contentFoto:
            "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150/2020/collections/3-2/20_frd_f15_ps34_rptr_scc5_fprb_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg",
          contentModelo: "Renegade",
          contentAño: "2016",
          contentKilometros: "Kilometros: 10.500",
          contentColor: "Negro",
          contentPrecio: "$43.000"
        }
      ]
    };
  },
  methods: {
    test(marker) {
      this.center = marker.coords;
      this.infoMarkerMarca = marker.contentMarca;
      this.infoMarkerModelo = marker.contentModelo;
      this.infoMarkerAño = marker.contentAño;
      this.infoMarkerKilometros = marker.contentKilometros;
      this.infoMarkerColor = marker.contentColor;
      this.infoMarkerPrecio = marker.contentPrecio;
      this.infoMarkerFoto = marker.contentFoto;
    }
  }
};
</script>

<style>
