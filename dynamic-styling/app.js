const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            inputVisibility: 'visible',
            bgColor: ''
        }
    },
    methods: {
        toggle() {
            if ( this.inputVisibility === 'hidden' ) {
                this.inputVisibility = 'visible'
                return;
            }

            this.inputVisibility = 'hidden'
        }
    },
}).mount('#assignment')