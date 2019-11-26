import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Drawer from './index'

jest.mock('next/link', () => {
  return ({ children }) => {
    return children
  }
})

describe('Check states for drawer', () => {
  afterEach(cleanup)
  it('should fire the toggle event', () => {
    const toggle = jest.fn()
    const { getByTestId } = render(<Drawer open={true} toggleDrawer={toggle} />)
    const drawerComponent = getByTestId('home')
    fireEvent.click(drawerComponent)
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})
