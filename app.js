Vue.component('film-card', {
  template: '#filmCard',
  props: ['title', 'opening', 'seen'],
  methods: {
    changeSeen: function () {
      this.seen = !this.seen
    }
  },
  computed: {
    seenText: function () {
      return this.seen ? 'Ya la he visto' : '¡Quiero verla!'
    }
  }
})

new Vue({
  el: '#movies',
  data: {
    films: []
  },
  created: function () {
    this.$http.get('https://swapi.co/api/films/')
    .then(function (response) {
      this.films = response.data.results.map(function (film) {
        return {
          id: film.episode_id,
          title: film.title,
          opening : film.opening_crawl,

          seen: false
        }
      })
    }.bind(this))
  }
})
