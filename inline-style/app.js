const app = Vue.createApp({
    data() {
        return {
            // boxSelected: false
        }
    },
    methods: {
        toggle(event) {
            // this.boxSelected = ! this.boxSelected;
            console.log('event', event.target)
            const ev = event.target.className;

            if ( ev.includes('not-selected') )
            {
                event.target.className = 'demo selected'
                return;
            }
            
            event.target.className = 'demo not-selected'
        }
    },
}).mount('#styling')