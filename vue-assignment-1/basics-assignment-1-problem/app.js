const app = Vue.createApp({
    data() {
        return {
            name: "abhed",
            age: 26,
            imageLink: "https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4799f9106491ebb58ca3351f6df5c44a.jpg"
        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
})

app.mount('#assignment')