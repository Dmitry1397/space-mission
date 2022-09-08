const buttons = document.querySelectorAll('.container button');
const switcher = document.querySelector('#switch');

let array;


fetch('scripts/data.json')
    .then((response) => response.json())
    .then((json) => array = json.destinations);


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
    const image = document.querySelector('#image');
    const description = document.querySelector('#description');
    const distance = document.querySelector('#distance');
    const travel = document.querySelector('#travel')

    name.textContent = array[index].name;
    description.textContent = array[index].description;
    distance.textContent = array[index].distance;
    travel.textContent = array[index].travel;
    image.src = array[index].images.png;
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


