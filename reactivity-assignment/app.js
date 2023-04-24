const app = Vue.createApp({
    data() {
        return {
            // result: 'Not there yet',
            count: 0
        }
    },
    watch: {
        count() {
            const that = this;

            setTimeout(function() {
                that.count = 0
            }, 5000);
        }
    },
    computed: {
        // result() {
        //     if ( this.count < 37 )
        //         return 'Not there Yet'
            
        //     if ( this.count > 37 )
        //         return 'Too much!'
            
        //     return this.count;
        // }
    },
    methods: {
        add(num) {
            console.log('adding')
            this.count += num
            console.log('current count', this.count)
            return;
        }
    }
}).mount('#assignment')