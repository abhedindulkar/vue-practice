const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            inputValue2: ''
        }
    },
    computed: {
        
        fullname() {
            console.log('running computed')
            return this.inputValue;
        },
        checkInput() {
            console.log('watching input in computed property')
            return this.inputValue;
        }
    },

    watch: {
        inputValue(newValue, oldValue) {
            console.log('newValue', newValue)
            console.log('oldValue', oldValue)
            
            return 'hii this value got changed'
        }
    },
    methods: {
        showAlert() {
            alert('hey whatsup!')
            console.log('running computed prop', fullname)
        },
        showKeydown(event) {
            console.log('keydown')
            console.log(event.target.value)
            this.inputValue = event.target.value
            console.log(this.inputValue)
        },
        enterClick(event) {
            this.inputValue2 = event.target.value;
        },
        outputFullName() {
            console.log('running outputfulname')
            return this.inputValue;
        }
    },
}).mount('#assignment')