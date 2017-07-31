let squareSide,
    rectangleHeight,
    rectangleWidth,
    circleRadius,
    triangleHeight,
    elem,
    field;
document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    rectangleWidth = document.getElementById('rectangle-width');
    rectangleHeight = document.getElementById('rectangle-height');
    circleRadius = document.getElementById('circle-radius');
    triangleHeight = document.getElementById('triangle-height');
    field = document.getElementsByClassName('field')[0];
});

class Shape {
  constructor(type) {
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.shape.style.left = Math.round(Math.random() * 601) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 601) + 'px';
  }

    draw() {
        field.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
    }
}
class Square extends Shape {
    constructor() {
        super('square');
        this.shape.style.width = squareSide.value + 'px';
        this.shape.style.height = squareSide.value + 'px';
        this.shape.style.left = Math.round(Math.random() * 601) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 601) + 'px';
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
        this.shape.style.left = Math.round(Math.random() * 601) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 601) + 'px';
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
        this.shape.style.left = Math.round(Math.random() * 601) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 601) + 'px';
        this.draw();
    }
}
const makeCircle = () => {
    new Circle();
    
}
class Triangle extends Shape {
    constructor() {
        super('triangle');
        this.shape.style.borderBottom = triangleHeight.value + 'px solid yellow';
        this.shape.style.borderRight = triangleHeight.value + 'px solid transparent';
        this.shape.style.left = Math.round(Math.random() * 601) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 601) + 'px';

        this.draw();
    }
}
const makeTriangle = () => {
    new Triangle();

    
}


function describe() {
    
    

}


