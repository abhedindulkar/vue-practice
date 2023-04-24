const app = Vue.createApp({
  data() {
    return {
        currentUserInput: '',
        message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
    //   this.message = this.currentUserInput;
    console.log(this.$refs.save1)
        this.$refs.save1.focus()
    },
  },
});

app.mount('#app');
