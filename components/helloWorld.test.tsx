import HelloWorld from './helloWorld';
import {render} from '@testing-library/react'

test('Render A Message',()=>{

    const { container , getByText} = render(<HelloWorld/>)
   expect(getByText('Hello World')).toBeInTheDocument()
    // expect(container.firstChild).toMatchInlineSnapshot(`<p>Hello World</p>`)
})