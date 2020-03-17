# Constants/Import/Export

In App.js you will see a lot of functiond and constants declared.  We want to separate them into differnet files and then import them as needed.  In reality, they would be imported into different files, but for this example we will import everything back into App.js.

The task consists of two parts:

1. Rename constants from camel-case naming to uppercase with underscores e.g. `myConstantVariable` should be `MY_CONSANT_VARIABLE`.
2. Move constants and functions in their own files.  They should then be export and imported back into App, so that the code still works as expected.

**Important:** Remember that this is not specific to React.  The task is done in the context of React, but you should also do this when not using React.

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

**Note:** Styles are provided for you in src/index.css. Look in the file to find the approriate class names to use on your HTML elements.

## Task Steps

### Rename constants

1. Open App.js.
2. Go through each const declaration and rename the variables so that they are using "screaming snake case" i.e. `UPPERCASE_WITH_UNDERSCORES`.
3. Make sure to rename all uses of those constants as well.
4. Test that the code still works.

### Export/import constants and functions

4. Each part of the code has a comment above it, saying the name of the file that you should create.  Go through and create all of those files.
5. Move the code from each section into those files.
6. Export each file and constant by puttting the export keyword before of each declaration e.g. `export const API_URL = "https://amazingpi.com/api/";`.
7. In App.js, import each constant/variable from the files in the format: `import { CONSTANT_NAME1, CONSTANT_NAME2, functionNameEtc } from './path/to/file.js';`.
8. Test thst the website still works as expected.

### Set default export

1. greet.js only exports one thing, so we can set it to be the default export.
2. in greet.js add the `default` after the word `export`.
3. in App.js remove the `{}` from the `greet` import.
4. This should now be in the same format you are used to when export/import React components.