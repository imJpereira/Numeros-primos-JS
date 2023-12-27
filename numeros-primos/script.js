const numbers = [];

const randomNum = () => (Math.random() * 100).toFixed(0);
for (let i = 1; i <= 30; i++) numbers.push(randomNum());

const primeNumbers = numbers.filter(number => {
        if (number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
});

const sum = primeNumbers.reduce((accumulartor, value) => {
    accumulartor += parseInt(value);
    return accumulartor;
}, 0)

console.log(primeNumbers);
console.log(`The sum of all prime numbers in the array is: ${sum}`)
