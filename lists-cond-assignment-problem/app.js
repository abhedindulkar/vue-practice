const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            isListHidden: false,
            taskCounter: 0
        }
    },
    computed: {
        buttonCaption() {
            if ( this.isListHidden )
                return 'show'
            
            return 'hide'
        }
    },
    methods: {
        addTask() {
            console.log('running')
            let tc = this.taskCounter
            this.tasks.push(this.inputTask)
            this.inputTask = ""
        },
        toggleList() {
            this.isListHidden = !this.isListHidden
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
        
    },
}).mount('#assignment')