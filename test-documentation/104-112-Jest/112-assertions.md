## Test assertions or execute condition or matches for run test code

When writing test, we often need to check that values meet specific or certain conditions

This conditions or matches decide if test pass for fail

Here is a full portion of test code 

```js

test('Renders a name', ()=>{
        render(<Greet name='Mahmudul'/>)
        const textElement = screen.getByText('Hello Mahmudul')
        expect(textElement).toBeInTheDocument()
    })

```

Here the condition/matches or assertions is: `toBeInTheDocument()`

Here is the full list of this type of jest conditions/matches

* [Jest Custom Matches](https://github.com/testing-library/jest-dom#custom-matchers)