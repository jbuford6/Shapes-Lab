let squareSide,
    rectangleHeight,
    rectangleWidth,
    circleRadius,
    triangleHeight,
    shapeNameLabel,
    shapeWidthLabel,
    shapeHeightLabel,
    shapeRadiusLabel,
    shapeAreaLabel,
    shapePerimeterLabel,
    infoContainer,
    elem,
    field;
document.addEventListener('DOMContentLoaded', () => {
    squareSide = document.getElementById('square-side');
    rectangleWidth = document.getElementById('rectangle-width');
    rectangleHeight = document.getElementById('rectangle-height');
    circleRadius = document.getElementById('circle-radius');
    triangleHeight = document.getElementById('triangle-height');
    shapeNameLabel = document.getElementById('shape-name');
    shapeWidthLabel = document.getElementById('shape-width');
    shapeHeightLabel = document.getElementById('shape-height');
    shapeRadiusLabel = document.getElementById('shape-radius');
    shapeAreaLabel = document.getElementById('shape-area');
    shapePerimeterLabel = document.getElementById('shape-perimeter');
    field = document.getElementsByClassName('field')[0];
});

class Shape {
  constructor(type, options) {
        this.info = {};
        this.info.type = type;
        this.info = Object.assign(this.info, options);
        this.info.area = Utils.area(type, options);
        this.info.perimeter = Utils.perimeter(type, options);
        this.shape = document.createElement('div');
        this.shape.className = type;
        this.shape.addEventListener('click', this.describe.bind(this.info));
        this.shape.addEventListener('dblclick', this.shape.remove);
        this.shape.style.left = Math.round(Math.random() * 530) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 530) + 'px';
  }

    draw() {
        field.appendChild(this.shape);
        console.log('im a: ' + this.shape.className);
    }
    describe() {
        shapeNameLabel.innerText = this.type || 'N/A';
        shapeWidthLabel.innerText = this.width || 'N/A';
        shapeHeightLabel.innerText = this.height || 'N/A';
        shapeRadiusLabel.innerText = this.radius || 'N/A';
        shapeAreaLabel.innerText = this.area || 'N/A';
        shapePerimeterLabel.innerText =  this.perimeter || 'N/A';
    }
}
class Square extends Shape {
    constructor(side) {
        super('square', { height: side, width: side});
        this.shape.style.width = squareSide.value + 'px';
        this.shape.style.height = squareSide.value + 'px';
        this.shape.style.left = Math.round(Math.random() * 530) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 530) + 'px';
        this.draw();
    }
}

const makeSquare = () => {
    new Square(Number(squareSide.value));
}    
class Rectangle extends Shape {
    constructor(height, width) {
        super('rectangle', { height, width });
        this.shape.style.width = rectangleWidth.value + 'px';
        this.shape.style.height = rectangleHeight.value + 'px';
        this.shape.style.left = Math.round(Math.random() * 530) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 530) + 'px';
        this.draw();
    }
}
const makeRectangle = () => {
    new Rectangle(Number(rectangleHeight.value), Number (rectangleWidth.value));
}
class Circle extends Shape {
    constructor(radius) {
        super('circle', { radius });
        this.shape.style.height = circleRadius.value + 'px';
        this.shape.style.width = circleRadius.value + 'px';
        this.shape.style.left = Math.round(Math.random() * 530) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 530) + 'px';
        this.draw();
    }
}
const makeCircle = () => {
    new Circle(Number(circleRadius.value));
    
}
class Triangle extends Shape {
    constructor(height) {
        super('triangle', { height });
        this.shape.style.borderBottom = triangleHeight.value + 'px solid yellow';
        this.shape.style.borderRight = triangleHeight.value + 'px solid transparent';
        this.shape.style.left = Math.round(Math.random() * 530) + 'px';
        this.shape.style.top =  Math.round(Math.random() * 530) + 'px';

        this.draw();
    }
}
const makeTriangle = () => {
    new Triangle(Number(circleRadius.value));

    
}

class Utils {
    static area(shape, options) {
        let area;

        switch (shape) {
            case 'circle':
                area = Math.PI * Math.pow(options.radius, 2);
                break;
            case 'triangle':
                area = Math.pow(options.height, 2) / 2;
                break;
            case 'square':
                area = options.height * options.width;
                break;
            case 'rectangle':
                area = options.height * options.width;
        }

        return area.toFixed(2);
    }

    static perimeter(shape, options) {
        let perimeter;

        switch (shape) {
            case 'circle':
                perimeter = Math.PI * 2 * options.radius;
                break;
            case 'triangle':
                perimeter = 2 * options.height * Math.sqrt(2 * Math.pow(options.height, 2));
                break;
            case 'square':
                perimeter = options.height * 4;
                break;
            case 'rectangle':
                perimeter = 2 * options.height + 2 * options.width;
        }

        return perimeter.toFixed(2);
    }
};

