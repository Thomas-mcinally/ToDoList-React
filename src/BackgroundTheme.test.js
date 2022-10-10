import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

let backgroundButton
beforeEach(() => {
  render(<App />)
  backgroundButton = screen.getByTestId('dark-light-mode-button')
})

test('when press background mode button, class of button changes', () => {
    expect(backgroundButton.className).toBe('light')

    userEvent.click(backgroundButton)

    expect(backgroundButton.className).toBe('dark')

    userEvent.click(backgroundButton)

    expect(backgroundButton.className).toBe('light')
  })