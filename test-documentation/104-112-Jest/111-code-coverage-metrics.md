## Code coverage metrics

`Code coverage metrics` is a metrics that can help you understand how much of software code is tested

* Statement coverage
* Branches coverage
* Functions coverage

in package.json we can extended `test` script by adding following script,

> `"coverage": "react-scripts test --coverage"` ,which is the extended version of `"test": "react-scripts test"`

then run on command prompt 

> `npm run coverage`

for details inspect we can add `--watchAll` after the script `"coverage": "react-scripts test --coverage --watchAll"`

we can add more tag in the end of script file to fill up our file coverage area

> `--collectCoverageForm='src/components/**/*.{ts,tsx}'`

the full command something like,

> `"coverage": "react-scripts test --coverage --watchAll --collectCoverageForm='src/components/**/*.{ts,tsx}"`

Ignore **tests, specs, types, stories, constants** files from coverage area, so the full script is,

> `"coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'"`

## Metrics threshold

Add these script as your preferred threshold 

```js

    "jest": {
        "coverageThreshold": {
            "global": {
                "branches": 80, //As preferred threshold 
                "functions": 80, //As preferred threshold 
                "lines": 80, //As preferred threshold 
                "statements": -10 //As preferred threshold 
            }
        }
    }

```