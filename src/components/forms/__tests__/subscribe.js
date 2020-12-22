import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Subscribe from '../subscribe'

test('subscribe renders email and message', () => {
  render(<Subscribe />)

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
})
