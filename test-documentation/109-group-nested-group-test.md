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