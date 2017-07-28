let squareSide,
    rectangleHeight,
    rectangleWidth,
    circleRadius,
    field;

document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    rectangleWidth = document.getElementById('rectangle-width');
    rectangleHeight = document.getElementById('rectangle-height');
    circleRadius = document.getElementById('circle-radius');
    field = document.getElementsByClassName('field')[0];
});

class Shape {
  constructor(type) {
        this.shape = document.createElement('div');
        this.shape.className = type;
  }

    draw() {
        field.appendChild(this.shape);
        randomPosition()
        console.log('im a: ' + this.shape.className);
    }
    randomPosition(elem) {
    var availW = field.offsetWidth  - 60;
    var availH = field.offsetHeight  - 60;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    elem.style.left = randomX;
    elem.style.top = randomY;
}
}
class Square extends Shape {
    constructor() {
        super('square');
        this.shape.style.width = squareSide.value + 'px';
        this.shape.style.height = squareSide.value + 'px';
        this.draw();
    }
}

const makeSquare = () => {
    new Square();
}    
class Rectangle extends Shape {
    constructor() {
        super('rectangle');
        this.shape.style.width = rectangleWidth.value + 'px';
        this.shape.style.height = rectangleHeight.value + 'px';
        this.draw();
    }
}
const makeRectangle = () => {
    new Rectangle();
}
class Circle extends Shape {
    constructor() {
        super('circle');
        this.shape.style.height = circleRadius.value + 'px';
        this.shape.style.width = circleRadius.value + 'px';
        this.draw();
    }
}
const makeCircle = () => {
    new Circle();
    
}
// randomPosition(elem) {
//     var availW = canvas.offsetWidth  - 60;
//     var availH = canvas.offsetHeight  - 60;
//     var randomY = Math.round(Math.random() * availH) + 'px';
//     var randomX = Math.round(Math.random() * availW) + 'px';
//     elem.style.left = randomX;
//     elem.style.top = randomY;
//     canvas.appendChild(elem);
// }


