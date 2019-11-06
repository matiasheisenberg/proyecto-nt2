<template>
  <div>
    <h1>Encontra el auto que estas buscando</h1>
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 1000px; height: 600px"
      
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.coords"
        :clickable="true"
        :draggable="false"
         
        
        
        @click="center=m.coords"
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
      markers: [
        {
          coords: 
          { lat: -34.609648, lng: -58.429089 },
          iconImage: 
          "https://cdn1.iconfinder.com/data/icons/cars-5/512/mercedes-pointer-point-car-auto-poi-map-place-geo-128.png",
          content: 
          "<h1>Mercedes Benz C250 COUPE</h1><p>Año: 2012</p><p>Kilometros: 50.000</p> <p>Color: Blanco</p><p>Precio: $50.000</p>"
        },
        {
          coords: 
          { lat: -34.605174, lng: -58.432752 },
          iconImage: 
          "https://image.flaticon.com/icons/png/128/805/805930.png",
          content: 
          "<h1>Ford Focus 4 puertas</h1>"
        },
        {
          coords:
           { lat: -34.605421, lng: -58.417517 },
          iconImage:
            "https://cdn.iconscout.com/icon/free/png-256/jeep-59-202822.png",
          content:
           "<h1>Jeep Renegade 4x4</h1>"
        }
      ]
    };
  }
};
</script>

<style>
</style>
