import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

test('should render the header', () => {
  const headerName = 'City Bienes Raíces'
  const { queryByText } = render(<Header />)
  expect(queryByText(headerName)).toBeTruthy()
})
