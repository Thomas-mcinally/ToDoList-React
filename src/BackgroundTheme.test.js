import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

let backgroundButton
beforeEach(() => {
  render(<App />)
})

test('when press background mode button, class of button changes', () => {
    expect(document.body.classList).toBe('light')

    userEvent.click(backgroundButton)

    expect(document.body.classList).toBe('dark')

    userEvent.click(backgroundButton)

    expect(document.body.classList).toBe('light')
  })