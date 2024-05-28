var output = []
var count = 1

// Se o número for divisivel por 5 e 3, Adicione "FizzBuzz"
// Se o número for divisivel apenas por 3, Adicione "Fizz"
// Se o número for divisivel apenas por 5, Adicione "Buzz"
// Se não for nenhuma dessas opções, Adicione o próprio número

const fizzBuzz = () => {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push('FizzBuzz')
    } else if (count % 3 === 0) {
        output.push('Fizz')
    } else if (count % 5 === 0) {
        output.push('Buzz')
    } else {
        output.push(count)
    }
    
    count++
    console.log(output)
}

for (let i = 0; i <= 20; i++) {
    fizzBuzz()
}
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz']