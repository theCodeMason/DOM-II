import './less/index.less'

// Your code goes here!
const funBusHead = document.querySelector('.logo-heading');
funBusHead.addEventListener("mouseover", event => {
    event.target.style.color = "red";

    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
});

//2.
const homeNav = document.querySelector('nav a:nth-of-type(1)')
homeNav.addEventListener("click", event => {
    homeNav.textContent = `Click on the contact button!`;

    setTimeout(function() {
        event.target.textContent = 'Home'
    }, 2000)
});

const dontClick = document.querySelector('nav a:nth-of-type(4)')
dontClick.addEventListener('click', event => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
});


//3.
const aboutUs = document.querySelector('nav a:nth-of-type(2)');
aboutUs.addEventListener('focus', event => {
  event.target.style.background = 'blue';
});


//4.
aboutUs.addEventListener('blur', (event) => {
  event.target.style.background = "";
});


//5.
let button = document.querySelector('.destination:nth-of-type(3)');

function random(number) {
  return Math.floor(Math.random() * number);
};
function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
};
button.onclick = function() {
  button.style.backgroundColor = randomColor();
};
button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
};
button.oncontextmenu = function(e) {
  e.preventDefault();
};


//6.
document.body.addEventListener('dblclick', event => {
    event.target.classList.toggle('large');
});


//7.
document.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        console.log(text)
    });
});


//8.
window.addEventListener('keydown', event => {
    if (event.key === 'h') {
        console.log("NO H'S ALLOWED");
    };
});


//9,10
const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    });
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500);
    });
};
