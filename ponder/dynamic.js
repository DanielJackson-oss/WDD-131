const student = [
    {
        last: 'Tinney',
        first: 'Tyler'
    },
    {
        last: 'Jackson',
        first: 'Daniel'    
    },
    {
        last: 'McClure',
        first: 'Eldon'
    }
];

let container = document.querySelector('#student_container');

student.forEach(function(item){
    let name = document.createElement('div');
    name.className = 'format';

let html = `
    <p class='details'>${item.first}</p>
    <p class='details'>${item.last}</p>
    <hr> 
`;

name.innerHTML = html;

container.appendChild(name);

})

// literal
const pets = ['cat', 'dog', 'bird'];

//constructor
const animals = new Array('pig', 'goat', 'sheep');

pets.push('lizard');

console.log(pets);

console.log(pets[0]);

pets[3] = 'bunny';  

console.log(pets);

pets.pop();

console.log(pets);

pets.shift();

console.log(pets);