import {render, screen} from "@testing-library/react"; 
import Greet from "./Greet";

test("Greet", ()=>{
    render(<Greet/>)
    //const textElement = screen.getByText('Hello') // direct text test
    const textElement = screen.getByText(/hello/i) // regex test with case insensitive
    expect(textElement).toBeInTheDocument()
})