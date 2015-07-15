# About

This is the template I use for all new JavaScript projects. Here's how it's
used:

    git clone node-template <project_name>
    cd <project_name>
    bin/init-repo

This will set up a basic project with browserify, [tape](https://www.npmjs.com/package/tape)-based
tests, and a few helpful scripts:

    npm run build       # Builds the browserified bundle.
    npm test            # Runs the tests.
    npm run test-watch  # Re-runs the tests whenever a source files changes.
    npm run lint        # Runs ESLint.
    npm run prepublish  # Runs build, lint, and test.
