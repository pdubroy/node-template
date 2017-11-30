'use strict';

const {execFileSync} = require('child_process');
const {dim, reset, yellow} = require('chalk');

function exec(command, args) {
  return execFileSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    stderr: 'inherit',
    encoding: 'utf-8',
  });
}

const [command, ...args] = process.argv.slice(2);
const fixing = args.some(x => x === '--fix');

try {
  exec(command, args);

  if (fixing) {
    console.log(
      dim(
        "  Formatting complete. Don't forget to add the changes to your commit!\n"
      )
    );
  }
} catch (err) {
  console.log(
    yellow(
      '\n\n' +
        '  This project uses ESLint (eslint.org) and Prettier (prettier.io) to \n' +
        '  prevent common errors and ensure a consistent coding style.'
    )
  );

  if (fixing) {
    console.log(
      dim(
        '\n  Any lint problems listed above cannot be fixed automatically.\n' +
          '  Please resolve them manually before committing your changes.\n'
      )
    );
  } else {
    console.log(
      dim('\n  Please run `') +
        reset('npm run format') +
        dim('` and add the resulting changes to your commit.\n') +
        dim(
          '  Any remaining lint problems should be resolved manually before committing.\n'
        )
    );
  }
  process.exit(err.status);
}
