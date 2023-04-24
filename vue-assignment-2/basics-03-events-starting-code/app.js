const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(event, num) {
        console.log('add event', event)
        this.counter = this.counter + num;
    },
    remove() {
        this.counter--;
    },
    updateName(event) {
        console.log(event)
        this.name = event.target.value
    },
    submitting(event) {
        // event.preventDefault();
        
        alert('submitting')
    },
    keyup() {
        // console.log('keyup')
        this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
