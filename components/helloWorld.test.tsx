import React from 'react';

import { render } from '@testing-library/react';
import HelloWorld from './helloWorld';

test('Render A Message', () => {
    const { getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
})
