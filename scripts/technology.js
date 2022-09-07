const buttons = document.querySelectorAll('.container button');
const switcher = document.querySelector('#switch');

let array;


fetch('scripts/data.json')
    .then((response) => response.json())
    .then((json) => array = json.technology);

function update(index) {    
    const name = document.querySelector('#name');
    const image = document.querySelector('#image');
    const description = document.querySelector('#description');
    const x = window.innerWidth;

    
    name.textContent = array[index].name;
    description.textContent = array[index].description;
    if (x < 1100) {
        image.src = array[index].images.landscape;
    } else {
        image.src = array[index].images.portrait;
    } 
    
}

buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
        update(index);
        buttons.forEach(element => {
            element.removeAttribute('class', 'active');
        })
        element.setAttribute('class', 'active');
    })
});


