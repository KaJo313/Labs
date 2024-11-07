function getAreaOfCircle(radius) {
    return Math.PI * radius ** 2
}

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius
}

function getAreaOfSquare(side) {
    return side**2   
}

function getAreaOfTriangle(base, height) {
    return 0.5 * base * height 
}

const radius = 5
const side = 4
const base = 3
const height = 4

console.log ("The area of the circle with a radius of " + radius + ": " + Math.round(getAreaOfCircle(radius) * 100) / 100)
console.log ("The circumference of the circle with a radius of " + radius + ": " + Math.round(getCircumferenceOfCircle(radius) * 100) / 100)
console.log ("The area of the square with a side length of " + side + ": " + getAreaOfSquare(side))
console.log ("The area of the triangle with base of " + base + " and height of " + height + ": " +  getAreaOfTriangle(base, height))



