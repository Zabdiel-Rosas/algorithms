import prompt from 'prompt'

const fib = (err, { number }) => {
  const limit = number < 1 ? 0 : number - 1
  const sequence = []
  let current

  for (let i = 0; i <= limit; i++) {
    let sLength = sequence.length

    if (sLength > 1) {
      let y = sLength - 2
      let z = sLength - 1
      current = sequence[y] + sequence[z]
    } else {
      current = sLength
    }

    sequence.push(current)
  }

  console.log(sequence)
}

const main = () => {
  const schema = {
    properties: {
      number: {
        pattern: /^\d+$/,
        message: 'Input must be a valid number',
        required: true,
      },
    },
  }

  prompt.start()
  console.log(
    'Please enter the number of elements you wish to retrieve from the Fibonacci sequence'
  )

  prompt.get(schema, fib)
}

main()
