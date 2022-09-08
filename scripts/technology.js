const buttons = document.querySelectorAll('.container button');
const switcher = document.querySelector('#switch');

let array;


fetch('scripts/data.json')
    .then((response) => response.json())
    .then((json) => array = json.technology);


const swiper = new Swiper('.swiper', {
        // Optional parameters
    direction: 'horizontal',
    loop: true,
});

swiper.on('slideChange', function () {

    console.log(swiper.realIndex)

    update(swiper.realIndex);

    buttons.forEach((element, index) => {
        if (index === swiper.realIndex) {
            element.setAttribute('class', 'active');
        } else {
            element.removeAttribute('class', 'active');
        }
    })
});

function update(index) {    
    const name = document.querySelector('#name');
    const image = document.querySelectorAll('#image');
    const description = document.querySelector('#description');
    const x = window.innerWidth;

    
    name.textContent = array[index].name;
    description.textContent = array[index].description;
    if (x < 1100) {
        image.forEach((element => {
            element.src = array[index].images.png;
        }));
    } else {
        image.forEach((element => {
            element.src = array[index].images.png;
        }));
    } 
    
}

buttons.forEach((element, index) => {
    const x = window.innerWidth;
    if (x > 1100) {
        element.addEventListener('click', () => {
            update(index);
            buttons.forEach(element => {
                element.removeAttribute('class', 'active');
            })
            element.setAttribute('class', 'active');
        })
    }
});


