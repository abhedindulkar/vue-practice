const app = Vue.createApp({
    data() {
        return {
            friends: [
            ],
        }
    },
})
app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleVisibility">Show Details</button>
            <ul v-if="isDataVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            isDataVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleVisibility() {
            this.isDataVisible = ! this.isDataVisible
        }
    },
})

app.mount('#app')
