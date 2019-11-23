<template>
  <div>
    <h1>{{serieSeleccionada.name}}</h1>
    <h5>{{`ID ${id}`}}</h5>
    <p>{{serieSeleccionada.description}}</p>
    <div>
      <b-row>
        <b-col cols="8">
          <div>
            <b-carousel
              id="carousel-no-animation"
              style="text-shadow: 0px 0px 2px #000"
              no-animation
              indicators
            >
              <b-carousel-slide
                v-for="(imagen, index) in serieSeleccionada.pictures"
                :key="index"
                caption=""
                :img-src="imagen"
              ></b-carousel-slide>

            </b-carousel>
          </div>
        </b-col>
        <b-col>
          <div
            v-for="(episodio, index) in serieSeleccionada.episodes"
            :key="index"
          >
            <blockquote class="blockquote text-center">
              <p class="mb-0">{{`Temporada ${episodio.season} Episodio ${episodio.episode}`}}</p>
              <footer class="blockquote-footer"><cite title="Source Title">{{episodio.name}}</cite></footer>
            </blockquote>
          </div>
        </b-col>
      </b-row>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      serieSeleccionada: null,
      series: [
        {
          id: 23455,
          name: "Game of Thrones",
          permalink: "game-of-thrones",
          url: "https://www.episodate.com/tv-show/game-of-thrones",
          description:
            "Nine noble families fight for control of the mythical land of Westeros. Political and sexual intrigue is pervasive. Robert Baratheon, King of Westeros, asks his old friend Eddard, Lord Stark, to serve as Hand of the King, or highest official. Secretly warned that the previous Hand was assassinated, Eddard accepts in order to investigate further. Meanwhile the Queen's family, the Lannisters, may be hatching a plot to take power. Across the sea, the last members of the previous and deposed ruling family, the Targaryens, are also scheming to regain the throne. The friction between the houses Stark, Lannister, Baratheon and Targaryen and with the remaining great houses Greyjoy, Tully, Arryn,Tyrell and Martell leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war and political confusion, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          description_source: "http://www.imdb.com/title/tt0944947/plotsummary",
          start_date: "2011-04-17",
          end_date: null,
          country: "US",
          status: "Ended",
          runtime: 60,
          network: "HBO",
          youtube_link: "CBMbda4xzro",
          image_path:
            "https://static.episodate.com/images/tv-show/full/23455.jpg",
          image_thumbnail_path:
            "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
          rating: "9.5180",
          rating_count: "693",
          countdown: null,
          genres: ["Drama", "Adventure", "Fantasy"],
          pictures: [
            "https://static.episodate.com/images/episode/23455-225.png",
            "https://static.episodate.com/images/episode/23455-861.png",
            "https://static.episodate.com/images/episode/23455-218.png",
            "https://static.episodate.com/images/episode/23455-432.png",
            "https://static.episodate.com/images/episode/23455-577.png",
            "https://static.episodate.com/images/episode/23455-491.png",
            "https://static.episodate.com/images/episode/23455-167.png"
          ],
          episodes: [
            {
              season: 1,
              episode: 1,
              name: "Winter is Coming",
              air_date: "2011-04-18 01:00:00"
            },
            {
              season: 1,
              episode: 2,
              name: "The Kingsroad",
              air_date: "2011-04-25 01:00:00"
            },
            {
              season: 1,
              episode: 3,
              name: "Lord Snow",
              air_date: "2011-05-02 01:00:00"
            },
            {
              season: 1,
              episode: 4,
              name: "Cripples, Bastards, and Broken Things",
              air_date: "2011-05-09 01:00:00"
            },
            {
              season: 1,
              episode: 5,
              name: "The Wolf and the Lion",
              air_date: "2011-05-16 01:00:00"
            },
            {
              season: 1,
              episode: 6,
              name: "A Golden Crown",
              air_date: "2011-05-23 01:00:00"
            },
            {
              season: 1,
              episode: 7,
              name: "You Win or You Die",
              air_date: "2011-05-30 01:00:00"
            },
            {
              season: 1,
              episode: 8,
              name: "The Pointy End",
              air_date: "2011-06-06 01:00:00"
            },
            {
              season: 1,
              episode: 9,
              name: "Baelor",
              air_date: "2011-06-13 01:00:00"
            },
            {
              season: 1,
              episode: 10,
              name: "Fire and Blood",
              air_date: "2011-06-20 01:00:00"
            },
            {
              season: 2,
              episode: 1,
              name: "The North Remembers",
              air_date: "2012-04-02 01:00:00"
            },
            {
              season: 2,
              episode: 2,
              name: "The Night Lands",
              air_date: "2012-04-09 01:00:00"
            },
            {
              season: 2,
              episode: 3,
              name: "What is Dead May Never Die",
              air_date: "2012-04-16 01:00:00"
            },
            {
              season: 2,
              episode: 4,
              name: "Garden of Bones",
              air_date: "2012-04-23 01:00:00"
            },
            {
              season: 2,
              episode: 5,
              name: "The Ghost of Harrenhal",
              air_date: "2012-04-30 01:00:00"
            },
            {
              season: 2,
              episode: 6,
              name: "The Old Gods and the New",
              air_date: "2012-05-07 01:00:00"
            },
            {
              season: 2,
              episode: 7,
              name: "A Man Without Honor",
              air_date: "2012-05-14 01:00:00"
            },
            {
              season: 2,
              episode: 8,
              name: "The Prince of Winterfell",
              air_date: "2012-05-21 01:00:00"
            },
            {
              season: 2,
              episode: 9,
              name: "Blackwater",
              air_date: "2012-05-28 01:00:00"
            },
            {
              season: 2,
              episode: 10,
              name: "Valar Morghulis",
              air_date: "2012-06-04 01:00:00"
            },
            {
              season: 3,
              episode: 1,
              name: "Valar Dohaeris",
              air_date: "2013-04-01 01:00:00"
            },
            {
              season: 3,
              episode: 2,
              name: "Dark Wings, Dark Words",
              air_date: "2013-04-08 01:00:00"
            },
            {
              season: 3,
              episode: 3,
              name: "Walk of Punishment",
              air_date: "2013-04-15 01:00:00"
            },
            {
              season: 3,
              episode: 4,
              name: "And Now His Watch is Ended",
              air_date: "2013-04-22 01:00:00"
            },
            {
              season: 3,
              episode: 5,
              name: "Kissed by Fire",
              air_date: "2013-04-29 01:00:00"
            },
            {
              season: 3,
              episode: 6,
              name: "The Climb",
              air_date: "2013-05-06 01:00:00"
            },
            {
              season: 3,
              episode: 7,
              name: "The Bear and the Maiden Fair",
              air_date: "2013-05-13 01:00:00"
            },
            {
              season: 3,
              episode: 8,
              name: "Second Sons",
              air_date: "2013-05-20 01:00:00"
            },
            {
              season: 3,
              episode: 9,
              name: "The Rains of Castamere",
              air_date: "2013-06-03 01:00:00"
            },
            {
              season: 3,
              episode: 10,
              name: "Mhysa",
              air_date: "2013-06-10 01:00:00"
            },
            {
              season: 4,
              episode: 1,
              name: "Two Swords",
              air_date: "2014-04-07 01:00:00"
            },
            {
              season: 4,
              episode: 2,
              name: "The Lion and the Rose",
              air_date: "2014-04-14 01:00:00"
            },
            {
              season: 4,
              episode: 3,
              name: "Breaker of Chains",
              air_date: "2014-04-21 01:00:00"
            },
            {
              season: 4,
              episode: 4,
              name: "Oathkeeper",
              air_date: "2014-04-28 01:00:00"
            },
            {
              season: 4,
              episode: 5,
              name: "First of His Name",
              air_date: "2014-05-05 01:00:00"
            },
            {
              season: 4,
              episode: 6,
              name: "The Laws of Gods and Men",
              air_date: "2014-05-12 01:00:00"
            },
            {
              season: 4,
              episode: 7,
              name: "Mockingbird",
              air_date: "2014-05-19 01:00:00"
            },
            {
              season: 4,
              episode: 8,
              name: "The Mountain and the Viper",
              air_date: "2014-06-02 01:00:00"
            },
            {
              season: 4,
              episode: 9,
              name: "The Watchers on the Wall",
              air_date: "2014-06-09 01:00:00"
            },
            {
              season: 4,
              episode: 10,
              name: "The Children",
              air_date: "2014-06-16 01:00:00"
            },
            {
              season: 5,
              episode: 1,
              name: "The Wars to Come",
              air_date: "2015-04-13 01:00:00"
            },
            {
              season: 5,
              episode: 2,
              name: "The House of Black and White",
              air_date: "2015-04-20 01:00:00"
            },
            {
              season: 5,
              episode: 3,
              name: "High Sparrow",
              air_date: "2015-04-27 01:00:00"
            },
            {
              season: 5,
              episode: 4,
              name: "Sons of the Harpy",
              air_date: "2015-05-04 01:00:00"
            },
            {
              season: 5,
              episode: 5,
              name: "Kill the Boy",
              air_date: "2015-05-11 01:00:00"
            },
            {
              season: 5,
              episode: 6,
              name: "Unbowed, Unbent, Unbroken",
              air_date: "2015-05-18 01:00:00"
            },
            {
              season: 5,
              episode: 7,
              name: "The Gift",
              air_date: "2015-05-25 01:00:00"
            },
            {
              season: 5,
              episode: 8,
              name: "Hardhome",
              air_date: "2015-06-01 01:00:00"
            },
            {
              season: 5,
              episode: 9,
              name: "The Dance of Dragons",
              air_date: "2015-06-08 01:00:00"
            },
            {
              season: 5,
              episode: 10,
              name: "Mother's Mercy",
              air_date: "2015-06-15 01:00:00"
            },
            {
              season: 6,
              episode: 1,
              name: "The Red Woman",
              air_date: "2016-04-25 01:00:00"
            },
            {
              season: 6,
              episode: 2,
              name: "Home",
              air_date: "2016-05-02 01:00:00"
            },
            {
              season: 6,
              episode: 3,
              name: "Oathbreaker",
              air_date: "2016-05-09 01:00:00"
            },
            {
              season: 6,
              episode: 4,
              name: "Book of the Stranger",
              air_date: "2016-05-16 01:00:00"
            },
            {
              season: 6,
              episode: 5,
              name: "The Door",
              air_date: "2016-05-23 01:00:00"
            },
            {
              season: 6,
              episode: 6,
              name: "Blood of My Blood",
              air_date: "2016-05-30 01:00:00"
            },
            {
              season: 6,
              episode: 7,
              name: "The Broken Man",
              air_date: "2016-06-06 01:00:00"
            },
            {
              season: 6,
              episode: 8,
              name: "No One",
              air_date: "2016-06-13 01:00:00"
            },
            {
              season: 6,
              episode: 9,
              name: "Battle of the Bastards",
              air_date: "2016-06-20 01:00:00"
            },
            {
              season: 6,
              episode: 10,
              name: "The Winds of Winter",
              air_date: "2016-06-27 01:00:00"
            },
            {
              season: 7,
              episode: 1,
              name: "Dragonstone",
              air_date: "2017-07-17 01:00:00"
            },
            {
              season: 7,
              episode: 2,
              name: "Stormborn",
              air_date: "2017-07-24 01:00:00"
            },
            {
              season: 7,
              episode: 3,
              name: "The Queen's Justice",
              air_date: "2017-07-31 01:00:00"
            },
            {
              season: 7,
              episode: 4,
              name: "The Spoils of War",
              air_date: "2017-08-07 01:00:00"
            },
            {
              season: 7,
              episode: 5,
              name: "Eastwatch",
              air_date: "2017-08-14 01:00:00"
            },
            {
              season: 7,
              episode: 6,
              name: "Beyond the Wall",
              air_date: "2017-08-21 01:00:00"
            },
            {
              season: 7,
              episode: 7,
              name: "The Dragon and the Wolf",
              air_date: "2017-08-28 01:00:00"
            },
            {
              season: 8,
              episode: 1,
              name: "Winterfell",
              air_date: "2019-04-15 01:00:00"
            },
            {
              season: 8,
              episode: 2,
              name: "A Knight of the Seven Kingdoms",
              air_date: "2019-04-22 01:00:00"
            },
            {
              season: 8,
              episode: 3,
              name: "The Long Night",
              air_date: "2019-04-29 01:00:00"
            },
            {
              season: 8,
              episode: 4,
              name: "The Last of the Starks",
              air_date: "2019-05-06 01:00:00"
            },
            {
              season: 8,
              episode: 5,
              name: "The Bells",
              air_date: "2019-05-13 01:00:00"
            },
            {
              season: 8,
              episode: 6,
              name: "The Iron Throne",
              air_date: "2019-05-20 01:00:00"
            }
          ]
        },
        {
   "id": 24010,
   "name": "The Walking Dead",
   "permalink": "the-walking-dead",
   "url": "https://www.episodate.com/tv-show/the-walking-dead",
   "description": "Rick Grimes is a former Sheriff's deputy who has been in a coma for several months after being shot while on duty. When he wakes, he discovers that the world has been taken over by zombies, and that he seems to be the only person still alive. After returning home to discover his wife and son missing, he heads for Atlanta to search for his family. Narrowly escaping death at the hands of the zombies on arrival in Atlanta, he is aided by another survivor,Glenn,who takes Rick to a camp outside the town. There,Rick finds his wife Lori and his son,Carl, along with his partner/best friend Shane and a small group of survivors who struggle to fend off the zombie hordes; as well as competing with other survivor groups who are prepared to do whatever it takes to survive. The Walking Dead is an American horror drama television series developed by Frank Darabont. It is based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. Andrew Lincoln stars as sheriff's deputy Rick Grimes, who awakens from a coma to find an apocalyptic world dominated by flesh-eating zombies, called \"walkers\". He sets out to find his family and encounters many other survivors along the way.",
   "description_source": "http://www.imdb.com/title/tt1520211/plotsummary",
   "start_date": "2010-10-31",
   "end_date": null,
   "country": "US",
   "status": "Running",
   "runtime": 60,
   "network": "AMC",
   "youtube_link": "BqVvZdUn-tc",
   "image_path": "https://static.episodate.com/images/tv-show/full/24010.jpg",
   "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/24010.jpg",
   "rating": "9.0231",
   "rating_count": "303",
   "countdown": {
      "season": 10,
      "episode": 2,
      "name": "We Are the End of the World",
      "air_date": "2019-10-14 01:00:00"
   },
   "genres": [
      "Drama",
      "Action",
      "Horror"
   ],
   "pictures": [
      "https://static.episodate.com/images/episode/24010-889.jpg",
      "https://static.episodate.com/images/episode/24010-745.jpg",
      "https://static.episodate.com/images/episode/24010-569.jpg",
      "https://static.episodate.com/images/episode/24010-213.jpg",
      "https://static.episodate.com/images/episode/24010-880.jpg",
      "https://static.episodate.com/images/episode/24010-264.jpg",
      "https://static.episodate.com/images/episode/24010-372.jpg"
   ],
   "episodes": [
      {
         "season": 1,
         "episode": 1,
         "name": "Days Gone Bye",
         "air_date": "2010-11-01 02:00:00"
      },
      {
         "season": 1,
         "episode": 2,
         "name": "Guts",
         "air_date": "2010-11-08 03:00:00"
      },
      {
         "season": 1,
         "episode": 3,
         "name": "Tell It to the Frogs",
         "air_date": "2010-11-15 03:00:00"
      },
      {
         "season": 1,
         "episode": 4,
         "name": "Vatos",
         "air_date": "2010-11-22 03:00:00"
      },
      {
         "season": 1,
         "episode": 5,
         "name": "Wildfire",
         "air_date": "2010-11-29 03:00:00"
      },
      {
         "season": 1,
         "episode": 6,
         "name": "TS-19",
         "air_date": "2010-12-06 03:00:00"
      },
      {
         "season": 2,
         "episode": 1,
         "name": "What Lies Ahead",
         "air_date": "2011-10-17 01:00:00"
      },
      {
         "season": 2,
         "episode": 2,
         "name": "Bloodletting",
         "air_date": "2011-10-24 01:00:00"
      },
      {
         "season": 2,
         "episode": 3,
         "name": "Save the Last One",
         "air_date": "2011-10-31 01:00:00"
      },
      {
         "season": 2,
         "episode": 4,
         "name": "Cherokee Rose",
         "air_date": "2011-11-07 02:00:00"
      },
      {
         "season": 2,
         "episode": 5,
         "name": "Chupacabra",
         "air_date": "2011-11-14 02:00:00"
      },
      {
         "season": 2,
         "episode": 6,
         "name": "Secrets",
         "air_date": "2011-11-21 02:00:00"
      },
      {
         "season": 2,
         "episode": 7,
         "name": "Pretty Much Dead Already",
         "air_date": "2011-11-28 02:00:00"
      },
      {
         "season": 2,
         "episode": 8,
         "name": "Nebraska",
         "air_date": "2012-02-13 02:00:00"
      },
      {
         "season": 2,
         "episode": 9,
         "name": "Triggerfinger",
         "air_date": "2012-02-20 02:00:00"
      },
      {
         "season": 2,
         "episode": 10,
         "name": "18 Miles Out",
         "air_date": "2012-02-27 02:00:00"
      },
      {
         "season": 2,
         "episode": 11,
         "name": "Judge, Jury, Executioner",
         "air_date": "2012-03-05 02:00:00"
      },
      {
         "season": 2,
         "episode": 12,
         "name": "Better Angels",
         "air_date": "2012-03-12 01:00:00"
      },
      {
         "season": 2,
         "episode": 13,
         "name": "Beside the Dying Fire",
         "air_date": "2012-03-19 01:00:00"
      },
      {
         "season": 3,
         "episode": 1,
         "name": "Seed",
         "air_date": "2012-10-15 01:00:00"
      },
      {
         "season": 3,
         "episode": 2,
         "name": "Sick",
         "air_date": "2012-10-22 01:00:00"
      },
      {
         "season": 3,
         "episode": 3,
         "name": "Walk with Me",
         "air_date": "2012-10-29 01:00:00"
      },
      {
         "season": 3,
         "episode": 4,
         "name": "Killer Within",
         "air_date": "2012-11-05 02:00:00"
      },
      {
         "season": 3,
         "episode": 5,
         "name": "Say the Word",
         "air_date": "2012-11-12 02:00:00"
      },
      {
         "season": 3,
         "episode": 6,
         "name": "Hounded",
         "air_date": "2012-11-19 02:00:00"
      },
      {
         "season": 3,
         "episode": 7,
         "name": "When the Dead Come Knocking",
         "air_date": "2012-11-26 02:00:00"
      },
      {
         "season": 3,
         "episode": 8,
         "name": "Made to Suffer",
         "air_date": "2012-12-03 02:00:00"
      },
      {
         "season": 3,
         "episode": 9,
         "name": "The Suicide King",
         "air_date": "2013-02-11 02:00:00"
      },
      {
         "season": 3,
         "episode": 10,
         "name": "Home",
         "air_date": "2013-02-18 02:00:00"
      },
      {
         "season": 3,
         "episode": 11,
         "name": "I Ain't a Judas",
         "air_date": "2013-02-25 02:00:00"
      },
      {
         "season": 3,
         "episode": 12,
         "name": "Clear",
         "air_date": "2013-03-04 02:00:00"
      },
      {
         "season": 3,
         "episode": 13,
         "name": "Arrow on the Doorpost",
         "air_date": "2013-03-11 01:00:00"
      },
      {
         "season": 3,
         "episode": 14,
         "name": "Prey",
         "air_date": "2013-03-18 01:00:00"
      },
      {
         "season": 3,
         "episode": 15,
         "name": "This Sorrowful Life",
         "air_date": "2013-03-25 01:00:00"
      },
      {
         "season": 3,
         "episode": 16,
         "name": "Welcome to the Tombs",
         "air_date": "2013-04-01 01:00:00"
      },
      {
         "season": 4,
         "episode": 1,
         "name": "30 Days Without an Accident",
         "air_date": "2013-10-14 01:00:00"
      },
      {
         "season": 4,
         "episode": 2,
         "name": "Infected",
         "air_date": "2013-10-21 01:00:00"
      },
      {
         "season": 4,
         "episode": 3,
         "name": "Isolation",
         "air_date": "2013-10-28 01:00:00"
      },
      {
         "season": 4,
         "episode": 4,
         "name": "Indifference",
         "air_date": "2013-11-04 02:00:00"
      },
      {
         "season": 4,
         "episode": 5,
         "name": "Internment",
         "air_date": "2013-11-11 02:00:00"
      },
      {
         "season": 4,
         "episode": 6,
         "name": "Live Bait",
         "air_date": "2013-11-18 02:00:00"
      },
      {
         "season": 4,
         "episode": 7,
         "name": "Dead Weight",
         "air_date": "2013-11-25 02:00:00"
      },
      {
         "season": 4,
         "episode": 8,
         "name": "Too Far Gone",
         "air_date": "2013-12-02 02:00:00"
      },
      {
         "season": 4,
         "episode": 9,
         "name": "After",
         "air_date": "2014-02-10 02:00:00"
      },
      {
         "season": 4,
         "episode": 10,
         "name": "Inmates",
         "air_date": "2014-02-17 02:00:00"
      },
      {
         "season": 4,
         "episode": 11,
         "name": "Claimed",
         "air_date": "2014-02-24 02:00:00"
      },
      {
         "season": 4,
         "episode": 12,
         "name": "Still",
         "air_date": "2014-03-03 02:00:00"
      },
      {
         "season": 4,
         "episode": 13,
         "name": "Alone",
         "air_date": "2014-03-10 01:00:00"
      },
      {
         "season": 4,
         "episode": 14,
         "name": "The Grove",
         "air_date": "2014-03-17 01:00:00"
      },
      {
         "season": 4,
         "episode": 15,
         "name": "Us",
         "air_date": "2014-03-24 01:00:00"
      },
      {
         "season": 4,
         "episode": 16,
         "name": "A",
         "air_date": "2014-03-31 01:00:00"
      },
      {
         "season": 5,
         "episode": 1,
         "name": "No Sanctuary",
         "air_date": "2014-10-13 01:00:00"
      },
      {
         "season": 5,
         "episode": 2,
         "name": "Strangers",
         "air_date": "2014-10-20 01:00:00"
      },
      {
         "season": 5,
         "episode": 3,
         "name": "Four Walls and a Roof",
         "air_date": "2014-10-27 01:00:00"
      },
      {
         "season": 5,
         "episode": 4,
         "name": "Slabtown",
         "air_date": "2014-11-03 02:00:00"
      },
      {
         "season": 5,
         "episode": 5,
         "name": "Self Help",
         "air_date": "2014-11-10 02:00:00"
      },
      {
         "season": 5,
         "episode": 6,
         "name": "Consumed",
         "air_date": "2014-11-17 02:00:00"
      },
      {
         "season": 5,
         "episode": 7,
         "name": "Crossed",
         "air_date": "2014-11-24 02:00:00"
      },
      {
         "season": 5,
         "episode": 8,
         "name": "Coda",
         "air_date": "2014-12-01 02:00:00"
      },
      {
         "season": 5,
         "episode": 9,
         "name": "What Happened and What's Going On",
         "air_date": "2015-02-09 02:00:00"
      },
      {
         "season": 5,
         "episode": 10,
         "name": "Them",
         "air_date": "2015-02-16 02:00:00"
      },
      {
         "season": 5,
         "episode": 11,
         "name": "The Distance",
         "air_date": "2015-02-23 02:00:00"
      },
      {
         "season": 5,
         "episode": 12,
         "name": "Remember",
         "air_date": "2015-03-02 02:00:00"
      },
      {
         "season": 5,
         "episode": 13,
         "name": "Forget",
         "air_date": "2015-03-09 01:00:00"
      },
      {
         "season": 5,
         "episode": 14,
         "name": "Spend",
         "air_date": "2015-03-16 01:00:00"
      },
      {
         "season": 5,
         "episode": 15,
         "name": "Try",
         "air_date": "2015-03-23 01:00:00"
      },
      {
         "season": 5,
         "episode": 16,
         "name": "Conquer",
         "air_date": "2015-03-30 01:00:00"
      },
      {
         "season": 6,
         "episode": 1,
         "name": "First Time Again",
         "air_date": "2015-10-12 01:00:00"
      },
      {
         "season": 6,
         "episode": 2,
         "name": "JSS",
         "air_date": "2015-10-19 01:00:00"
      },
      {
         "season": 6,
         "episode": 3,
         "name": "Thank You",
         "air_date": "2015-10-26 01:00:00"
      },
      {
         "season": 6,
         "episode": 4,
         "name": "Here's Not Here",
         "air_date": "2015-11-02 02:00:00"
      },
      {
         "season": 6,
         "episode": 5,
         "name": "Now",
         "air_date": "2015-11-09 02:00:00"
      },
      {
         "season": 6,
         "episode": 6,
         "name": "Always Accountable",
         "air_date": "2015-11-16 02:00:00"
      },
      {
         "season": 6,
         "episode": 7,
         "name": "Heads Up",
         "air_date": "2015-11-23 02:00:00"
      },
      {
         "season": 6,
         "episode": 8,
         "name": "Start to Finish",
         "air_date": "2015-11-30 02:00:00"
      },
      {
         "season": 6,
         "episode": 9,
         "name": "No Way Out",
         "air_date": "2016-02-15 02:00:00"
      },
      {
         "season": 6,
         "episode": 10,
         "name": "The Next World",
         "air_date": "2016-02-22 02:00:00"
      },
      {
         "season": 6,
         "episode": 11,
         "name": "Knots Untie",
         "air_date": "2016-02-29 02:00:00"
      },
      {
         "season": 6,
         "episode": 12,
         "name": "Not Tomorrow Yet",
         "air_date": "2016-03-07 02:00:00"
      },
      {
         "season": 6,
         "episode": 13,
         "name": "The Same Boat",
         "air_date": "2016-03-14 01:00:00"
      },
      {
         "season": 6,
         "episode": 14,
         "name": "Twice as Far",
         "air_date": "2016-03-21 01:00:00"
      },
      {
         "season": 6,
         "episode": 15,
         "name": "East",
         "air_date": "2016-03-28 01:00:00"
      },
      {
         "season": 6,
         "episode": 16,
         "name": "Last Day on Earth",
         "air_date": "2016-04-04 01:00:00"
      },
      {
         "season": 7,
         "episode": 1,
         "name": "The Day Will Come When You Won't Be",
         "air_date": "2016-10-24 01:00:00"
      },
      {
         "season": 7,
         "episode": 2,
         "name": "The Well",
         "air_date": "2016-10-31 01:00:00"
      },
      {
         "season": 7,
         "episode": 3,
         "name": "The Cell",
         "air_date": "2016-11-07 02:00:00"
      },
      {
         "season": 7,
         "episode": 4,
         "name": "Service",
         "air_date": "2016-11-14 02:00:00"
      },
      {
         "season": 7,
         "episode": 5,
         "name": "Go Getters",
         "air_date": "2016-11-21 02:00:00"
      },
      {
         "season": 7,
         "episode": 6,
         "name": "Swear",
         "air_date": "2016-11-28 02:00:00"
      },
      {
         "season": 7,
         "episode": 7,
         "name": "Sing Me a Song",
         "air_date": "2016-12-05 02:00:00"
      },
      {
         "season": 7,
         "episode": 8,
         "name": "Hearts Still Beating",
         "air_date": "2016-12-12 02:00:00"
      },
      {
         "season": 7,
         "episode": 9,
         "name": "Rock in the Road",
         "air_date": "2017-02-13 02:00:00"
      },
      {
         "season": 7,
         "episode": 10,
         "name": "New Best Friends",
         "air_date": "2017-02-20 02:00:00"
      },
      {
         "season": 7,
         "episode": 11,
         "name": "Hostiles and Calamities",
         "air_date": "2017-02-27 02:00:00"
      },
      {
         "season": 7,
         "episode": 12,
         "name": "Say Yes",
         "air_date": "2017-03-06 02:00:00"
      },
      {
         "season": 7,
         "episode": 13,
         "name": "Bury Me Here",
         "air_date": "2017-03-13 01:00:00"
      },
      {
         "season": 7,
         "episode": 14,
         "name": "The Other Side",
         "air_date": "2017-03-20 01:00:00"
      },
      {
         "season": 7,
         "episode": 15,
         "name": "Something They Need",
         "air_date": "2017-03-27 01:00:00"
      },
      {
         "season": 7,
         "episode": 16,
         "name": "The First Day of the Rest of Your Life",
         "air_date": "2017-04-03 01:00:00"
      },
      {
         "season": 8,
         "episode": 1,
         "name": "Mercy",
         "air_date": "2017-10-23 01:00:00"
      },
      {
         "season": 8,
         "episode": 2,
         "name": "The Damned",
         "air_date": "2017-10-30 01:00:00"
      },
      {
         "season": 8,
         "episode": 3,
         "name": "Monsters",
         "air_date": "2017-11-06 02:00:00"
      },
      {
         "season": 8,
         "episode": 4,
         "name": "Some Guy",
         "air_date": "2017-11-13 02:00:00"
      },
      {
         "season": 8,
         "episode": 5,
         "name": "The Big Scary U",
         "air_date": "2017-11-20 02:00:00"
      },
      {
         "season": 8,
         "episode": 6,
         "name": "The King, the Widow, and Rick",
         "air_date": "2017-11-27 02:00:00"
      },
      {
         "season": 8,
         "episode": 7,
         "name": "Time for After",
         "air_date": "2017-12-04 02:00:00"
      },
      {
         "season": 8,
         "episode": 8,
         "name": "How It's Gotta Be",
         "air_date": "2017-12-11 02:00:00"
      },
      {
         "season": 8,
         "episode": 9,
         "name": "Honor",
         "air_date": "2018-02-26 02:00:00"
      },
      {
         "season": 8,
         "episode": 10,
         "name": "The Lost and the Plunderers",
         "air_date": "2018-03-05 02:00:00"
      },
      {
         "season": 8,
         "episode": 11,
         "name": "Dead or Alive Or",
         "air_date": "2018-03-12 01:00:00"
      },
      {
         "season": 8,
         "episode": 12,
         "name": "The Key",
         "air_date": "2018-03-19 01:00:00"
      },
      {
         "season": 8,
         "episode": 13,
         "name": "Do Not Send Us Astray",
         "air_date": "2018-03-26 01:00:00"
      },
      {
         "season": 8,
         "episode": 14,
         "name": "Still Gotta Mean Something",
         "air_date": "2018-04-02 01:00:00"
      },
      {
         "season": 8,
         "episode": 15,
         "name": "Worth",
         "air_date": "2018-04-09 01:00:00"
      },
      {
         "season": 8,
         "episode": 16,
         "name": "Wrath",
         "air_date": "2018-04-16 01:00:00"
      },
      {
         "season": 9,
         "episode": 1,
         "name": "A New Beginning",
         "air_date": "2018-10-08 01:00:00"
      },
      {
         "season": 9,
         "episode": 2,
         "name": "The Bridge",
         "air_date": "2018-10-15 01:00:00"
      },
      {
         "season": 9,
         "episode": 3,
         "name": "Warning Signs",
         "air_date": "2018-10-22 01:00:00"
      },
      {
         "season": 9,
         "episode": 4,
         "name": "The Obliged",
         "air_date": "2018-10-29 01:00:00"
      },
      {
         "season": 9,
         "episode": 5,
         "name": "What Comes After",
         "air_date": "2018-11-05 02:00:00"
      },
      {
         "season": 9,
         "episode": 6,
         "name": "Who Are You Now?",
         "air_date": "2018-11-12 02:00:00"
      },
      {
         "season": 9,
         "episode": 7,
         "name": "Stradivarius",
         "air_date": "2018-11-19 02:00:00"
      },
      {
         "season": 9,
         "episode": 8,
         "name": "Evolution",
         "air_date": "2018-11-26 02:00:00"
      },
      {
         "season": 9,
         "episode": 9,
         "name": "Adaptation",
         "air_date": "2019-02-11 02:00:00"
      },
      {
         "season": 9,
         "episode": 10,
         "name": "Omega",
         "air_date": "2019-02-18 02:00:00"
      },
      {
         "season": 9,
         "episode": 11,
         "name": "Bounty",
         "air_date": "2019-02-25 02:00:00"
      },
      {
         "season": 9,
         "episode": 12,
         "name": "Guardians",
         "air_date": "2019-03-04 02:00:00"
      },
      {
         "season": 9,
         "episode": 13,
         "name": "Chokepoint",
         "air_date": "2019-03-11 01:00:00"
      },
      {
         "season": 9,
         "episode": 14,
         "name": "Scars",
         "air_date": "2019-03-18 01:00:00"
      },
      {
         "season": 9,
         "episode": 15,
         "name": "The Calm Before",
         "air_date": "2019-03-25 01:00:00"
      },
      {
         "season": 9,
         "episode": 16,
         "name": "The Storm",
         "air_date": "2019-04-01 01:00:00"
      },
      {
         "season": 10,
         "episode": 1,
         "name": "Lines We Cross",
         "air_date": "2019-10-07 01:00:00"
      },
      {
         "season": 10,
         "episode": 2,
         "name": "We Are the End of the World",
         "air_date": "2019-10-14 01:00:00"
      },
      {
         "season": 10,
         "episode": 3,
         "name": "Ghosts",
         "air_date": "2019-10-21 01:00:00"
      },
      {
         "season": 10,
         "episode": 4,
         "name": "Silence the Whisperers",
         "air_date": "2019-10-28 01:00:00"
      },
      {
         "season": 10,
         "episode": 5,
         "name": "What It Always Is",
         "air_date": "2019-11-04 02:00:00"
      },
      {
         "season": 10,
         "episode": 6,
         "name": "Bonds",
         "air_date": "2019-11-11 02:00:00"
      },
      {
         "season": 10,
         "episode": 7,
         "name": "Open Your Eyes",
         "air_date": "2019-11-18 02:00:00"
      },
      {
         "season": 10,
         "episode": 8,
         "name": "The World Before",
         "air_date": "2019-11-25 02:00:00"
      }
   ]
},{
   "id": 46778,
   "name": "Stranger Things",
   "permalink": "montauk",
   "url": "https://www.episodate.com/tv-show/montauk",
   "description": "A love letter to the '80s classics that captivated a generation, Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
   "description_source": null,
   "start_date": "2016-07-15",
   "end_date": null,
   "country": "US",
   "status": "Running",
   "runtime": 60,
   "network": "Netflix",
   "youtube_link": "IdixyYeV7dI",
   "image_path": "https://static.episodate.com/images/tv-show/full/46778.jpg",
   "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/46778.jpg",
   "rating": "9.3300",
   "rating_count": "203",
   "countdown": null,
   "genres": [
      "Drama",
      "Fantasy",
      "Science-Fiction"
   ],
   "pictures": [
      "https://static.episodate.com/images/episode/46778-135.jpg",
      "https://static.episodate.com/images/episode/46778-432.jpg",
      "https://static.episodate.com/images/episode/46778-765.jpg",
      "https://static.episodate.com/images/episode/46778-132.jpg",
      "https://static.episodate.com/images/episode/46778-533.jpg",
      "https://static.episodate.com/images/episode/46778-428.jpg",
      "https://static.episodate.com/images/episode/46778-836.jpg"
   ],
   "episodes": [
      {
         "season": 1,
         "episode": 1,
         "name": "Chapter One: The Vanishing of Will Byers",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 2,
         "name": "Chapter Two: The Weirdo on Maple Street",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 3,
         "name": "Chapter Three: Holly, Jolly",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 4,
         "name": "Chapter Four: The Body",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 5,
         "name": "Chapter Five: The Flea and the Acrobat",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 6,
         "name": "Chapter Six: The Monster",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 7,
         "name": "Chapter Seven: The Bathtub",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 1,
         "episode": 8,
         "name": "Chapter Eight: The Upside Down",
         "air_date": "2016-07-15 12:00:00"
      },
      {
         "season": 2,
         "episode": 1,
         "name": "Chapter One: MADMAX",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 2,
         "name": "Chapter Two: Trick or Treat, Freak",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 3,
         "name": "Chapter Three: The Pollywog",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 4,
         "name": "Chapter Four: Will the Wise",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 5,
         "name": "Chapter Five: Dig Dug",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 6,
         "name": "Chapter Six: The Spy",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 7,
         "name": "Chapter Seven: The Lost Sister",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 8,
         "name": "Chapter Eight: The Mind Flayer",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 2,
         "episode": 9,
         "name": "Chapter Nine: The Gate",
         "air_date": "2017-10-27 12:00:00"
      },
      {
         "season": 3,
         "episode": 1,
         "name": "Chapter One: Suzie, Do You Copy?",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 2,
         "name": "Chapter Two: The Mall Rats",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 3,
         "name": "Chapter Three: The Case of the Missing Lifeguard",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 4,
         "name": "Chapter Four: The Sauna Test",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 5,
         "name": "Chapter Five: The Flayed",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 6,
         "name": "Chapter Six: E Pluribus Unum",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 7,
         "name": "Chapter Seven: The Bite",
         "air_date": "2019-07-04 12:00:00"
      },
      {
         "season": 3,
         "episode": 8,
         "name": "Chapter Eight: The Battle of Starcourt",
         "air_date": "2019-07-04 12:00:00"
      }
   ]
}
      ]
    };
  },
  created() {
    let serieEncontrada = this.series.find(serie => serie.id == this.id);
    this.serieSeleccionada = serieEncontrada;
  }
};
</script>

<style>
</style>