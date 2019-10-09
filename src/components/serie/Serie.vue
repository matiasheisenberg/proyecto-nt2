<template>
  <div>
    <h1>Series</h1>
    <div class="card-deck">
      <div
        class="card"
        
        v-for="show in series.tv_shows"
        :key="show.id"
      >
        <img
          :src="show.image_thumbnail_path"
          class="card-img-top"
          alt="..."
        >
        <div class="card-body">
          <h5 class="card-title">{{show.name}}</h5>
          <h6 class="card-title">{{show.network}}</h6>
          <button
            class="btn btn-primary"
            @click="navegateToDetail(show.id)"
          >Ver detalle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    navegateToDetail(serieId){
      console.log("id de la serie",serieId)
      // this.$router.push({path:`/detalle/${id}`})
      this.$router.push({name:'detalle',params:{id:serieId}})
    }
  },
  data() {
    return {
      series: {
        tv_shows: [
          
          {
            id: 23455,
            name: "Game of Thrones",
            permalink: "game-of-thrones",
            start_date: "2011-04-17",
            end_date: null,
            country: "US",
            network: "HBO",
            status: "Ended",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
          },

          {
            id: 24010,
            name: "The Walking Dead",
            permalink: "the-walking-dead",
            start_date: "2010-10-31",
            end_date: null,
            country: "US",
            network: "AMC",
            status: "Running",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/24010.jpg"
          },

          {
            id: 46778,
            name: "Stranger Things",
            permalink: "montauk",
            start_date: "2016-07-15",
            end_date: null,
            country: "US",
            network: "Netflix",
            status: "Running",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/46778.jpg"
          },

        ]
      }
    };
  }
};
</script>