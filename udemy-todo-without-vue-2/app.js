
// console.log(Vue)
console.log('vue createApp', Vue.createApp({
    data(){
        return {
            inputValue : '',
            goals : []
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue)
            this.inputValue = '';
        }
    }
}));

// const buttonElement = document.getElementById('form-button');

// const inputEl  = document.querySelector('input');
// // const ulElement = document.getElementsByTagName('   ')
// const multibutons = document.querySelector('button');
// const ulElement = document.querySelector('ul');

// function selectedButton () {
//     const listElement = document.createElement('li');
//     // console.log(buttonElement);
//     let inputText = inputEl.value;
//     console.log(inputText);
//     listElement.textContent = inputText;
//     console.log(listElement)
//     ulElement.appendChild(listElement);
//     console.log(ulElement)
//     inputEl.value = '';

//     // let text = document.getElementById('goal').value;


//     // console.log(multibutons)
// }

// buttonElement.addEventListener('click', selectedButton);