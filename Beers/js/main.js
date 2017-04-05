vm = new Vue({
    el: '#app',
    data: {
        beers: []
    },
    methods: {
        getBeers () {
            axios.get('https://api.punkapi.com/v2/beers/')
                .then((response) => {
                    this.beers = response.data;
                });
        }
    },
    mounted () {
        this.getBeers();
    }
});
