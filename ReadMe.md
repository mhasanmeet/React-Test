## React Testing 

## **test function**

test function globally avilable. test accept three arguments, `test(name, fn, timeout)`.

* First argument is the `test name`, which is used to identify the test 
* Second argument is the `function` that, where contains the expectations to test 
* Third argument is `timeout`, which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 second. 

## React Test Component Structure 

```js

    import { 
        render, //Using virtual dom of App component using render method from react-testing-library
        screen  // Screen is a object, contains method to query virtual dom
    } from '@testing-library/react';
    import App from './App'; 
    

    test('renders learn react link', () => {
    render(<App />); //pass App component as an argument to render
    const linkElement = screen.getByText(/learn react/i); //we use a query "getByTest", which accepts string or regular expression as an argument, in here we use case insensitive word of regex
    expect(linkElement).toBeInTheDocument(); //expected result, will show error if it is not pass successfully
    });

```

## Test Driven Development (TDD)

Test driven development is a software development process where you write tests before writing the software code

Once the test have been written, you then write the code to ensure the tests pass. This process involves three steps;

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed
3. Refactor the code for optimizing while ensuring the tests continue to pass 

This process also called red-green testing as all tests go from a red failed state to a green passed state

## Watch Usage

* To test a specific test, press `w` in the command prompt where test is happening, then press `p` to filter a filename for specific file test. 

## Filter Test
* If we use `only` after test method, only that test will run others test on that test files will be ignored.  

```js
test.only('test name', ()=>{
    render(<ComponentBlock/>)
    const textElement = screen.getByText('testThatExpect')
    expect(textElement).toBeInTheDocument()
})
```

* Similar, to skip a test we can use `test.skip`

## Group & Nested group test

* We can group test following like this,

```js
    describe('group-name', ()=>{
        ......
        test blocks
        ......
    })

```

* Structure with two test blocks like this 

```js

    describe('group-name', ()=>{
        test('test1', ()=>{
            render(<testBlock/>)
            const testElement = screen.getByText('expectedText')
            expect(textElement).toBeInTheDocument()
        })

        test('test1', ()=>{
            render(<testBlock/>)
            const testElement = screen.getByText('expectedText')
            expect(textElement).toBeInTheDocument()
        })
    })

```

* In group test `.only` & `.skip` is also work like filter test

```js
    describe.only('group-name', ()=>{
        ......
        test blocks
        ......
    })

```

```js
    describe.skip('group-name', ()=>{
        ......
        test blocks
        ......
    })

```

* Nested group test

```js

    describe('group-name', ()=>{
        test('test1', ()=>{
            render(<testBlock/>)
            const testElement = screen.getByText('expectedText')
            expect(textElement).toBeInTheDocument()
        })

        describe('nested-group', ()=>{
            test('test1', ()=>{
                render(<testBlock/>)
                const testElement = screen.getByText('expectedText')
                expect(textElement).toBeInTheDocument()
            })
        })
    })

```

* Also more than one group test in a file can have

```js

    describe('group-name', ()=>{
        test('test1', ()=>{
            render(<testBlock/>)
            const testElement = screen.getByText('expectedText')
            expect(textElement).toBeInTheDocument()
        })
    })

    describe('nested-group', ()=>{
        test('test1', ()=>{
            render(<testBlock/>)
            const testElement = screen.getByText('expectedText')
            expect(textElement).toBeInTheDocument()
        })
    })

```

## 

## Resources 
* [React Testing Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd)