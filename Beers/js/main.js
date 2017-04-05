vm = new Vue({
    el: '#app',
    data: {
        beers: [],
        searchTerm: ''
    },
    methods: {
        getSearch () {
            axios.get('https://api.punkapi.com/v2/beers').then(response => {
                this.searchTerm = this.searchTerm.trim();
                this.beers = [];
                for (var i = 0; i < response.data.length; i++) {
                    if (this.searchTerm === '') {
                        return this.beers = [];
                        break;
                    } else if (response.data[i].description.includes(this.searchTerm) || response.data[i].name.includes(this.searchTerm)) {
                        this.beers.push(response.data[i]);
                    }
                }
                this.searchTerm = '';
                return this.beers;
            });
        }
    }
});
