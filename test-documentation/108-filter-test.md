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