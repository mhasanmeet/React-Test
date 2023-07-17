import {render, screen} from "@testing-library/react"; 
import Greet from "./Greet";

describe('Greet', ()=>{

    test('Renders correctly', ()=>{
        render(<Greet/>)
        //const textElement = screen.getByText('Hello') // direct text test
        const textElement = screen.getByText(/hello/i) // regex test with case insensitive
        expect(textElement).toBeInTheDocument()
    })
    
    describe('Nested', ()=>{
        test('Renders a name', ()=>{
            render(<Greet name='Mahmudul'/>)
            const textElement = screen.getByText('Hello Mahmudul')
            expect(textElement).toBeInTheDocument()
        })
    })
})