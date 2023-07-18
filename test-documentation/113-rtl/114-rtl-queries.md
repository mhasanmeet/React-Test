## RTL queries 

Every test we write generally involves the following basic steps 

1. Render the component
2. Find an element rendered by the component
3. Assert/set condition the element found in step 2, which will pass or fail the pass

To render the component, we use the render method from RTL

For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom 

`Queries` are the methods that Testing Library provides to find elements on the page 

* To find a single element on the page, we have 

    * getBy..
    * queryBy..
    * findBy..

* To find multiple elements on the page, we have 

    * getAllBy..
    * queryAllBy..
    * findAllBy..