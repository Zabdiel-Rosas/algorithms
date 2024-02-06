import prompt = require('prompt');

interface PromptResult {
  [key: string]: string;
}

type GetCallback<T> = (err: Error | null, result: T) => void;

const fib: GetCallback<PromptResult> = (err, result) => {
  const limit = Number(result.number);
  const sequence: number[] = [];

  for (let i = 0; i < limit; i++) {
    if (i > 1) {
      const current = sequence[i - 2] + sequence[i - 1];
      sequence.push(current);
    } else {
      sequence.push(i);
    }
  }

  console.log(sequence);
};

const main = () => {
  const schema = {
    properties: {
      number: {
        pattern: /^\d+$/,
        message: 'Input must be a positive integer number!',
        required: true
      }
    }
  };

  prompt.start();

  console.log(
    'Enter the number of elements you want to retrieve from the fibonacci sequence'
  );
  prompt.get(schema, fib);
};

export default main;
