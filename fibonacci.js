import prompt from 'prompt'

const fib = (err, { number }) => {
  const limit = Number(number)
  const sequence = []

  for (let i = 0; i < limit; i++) {
    if (i > 1) {
      const current = sequence[i - 2] + sequence[i - 1]
      sequence.push(current)
    } else {
      sequence.push(i)
    }
  }

  console.log('Fibonacci sequence: ', sequence)
}

const main = () => {
  const schema = {
    properties: {
      number: {
        pattern: /^\d+$/,
        message: 'The input must be a positive integer number!',
        required: true,
      },
    },
  }

  prompt.start()

  console.log(
    'Please enter the number of elements you wish to retrieve from the fibonacci sequence'
  )

  prompt.get(schema, fib)
}

main()
