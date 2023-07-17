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