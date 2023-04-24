const app = Vue.createApp({
    data() {
        return {
            goals: 'vue course to be finished',
            vueLink: 'https://vuejs.org/guide/essentials/forms.html#radio'  
        }
    },
    methods: {
        goalsFunction () {
            let random = Math.random()
            console.log(random)
            if ( random < 0.5 ) {
                
                return '<h1>less than 5</h1>'
            }
            else {
                return 'greater than or equal to 5'
            }
        }
    },
});

app.mount('#user-goal');