<template>
  <div>
    <h1>Series</h1>
    <div class="card-columns">
      <div
        class="card"
        style="width: 12rem;"
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
          <a
            href="#"
            class="btn btn-primary"
          >Ver detalle</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: {
        total: "13793",
        page: 1,
        pages: 690,
        tv_shows: [
          {
            id: 35624,
            name: "The Flash",
            permalink: "the-flash",
            start_date: "2014-10-07",
            end_date: null,
            country: "US",
            network: "The CW",
            status: "Running",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"
          },
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

          {
            id: 8362,
            name: "The Big Bang Theory",
            permalink: "the-big-bang-theory",
            start_date: "2007-09-24",
            end_date: null,
            country: "US",
            network: "CBS",
            status: "Ended",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/8362.jpg"
          },

          {
            id: 29977,
            name: "Vikings",
            permalink: "vikings",
            start_date: "2013-03-03",
            end_date: null,
            country: "CA",
            network: "History",
            status: "Running",
            image_thumbnail_path:
              "https://static.episodate.com/images/tv-show/thumbnail/29977.jpg"
          }
        ]
      }
    };
  }
};
</script>