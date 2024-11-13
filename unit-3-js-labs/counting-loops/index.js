for (let i = 1; i<=10; i++) {
    console.log (i)    
}

for (let j = 10; j >= 1; j--) {  
    console.log(j)
}


let k = 1
while (k <= 10) {
    console.log(k)
    k++
}

let l = 10
while (l >= 1) {
    console.log(l)
    l--
}


let m = 1
do {
    console.log(m)
    m++
} while (m <= 10)

let n = 10
do {
    console.log(n)
    n--
} while (n >= 1)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let p = 0; p < numbers.length; p++) {
    const number = numbers[p]
	console.log(number)
}


anyString = "headlamp"
leadingSpaces = ""
for (let q = 1; q <= 10 - anyString.length; q++) {
    leadingSpaces += " "
}
anyString = leadingSpaces + anyString
console.log(anyString)
console.log("(" + leadingSpaces.length + " spaces were added to the front)")

