import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import App from './App';

var randomstring = require('randomstring')

test('when press background mode button, class of button changes', () => {
    render(<App/>)
    const backgroundButton = screen.getByTestId('dark-light-mode-button')

    expect(backgroundButton.className).toBe('light')

    userEvent.click(backgroundButton)

    expect(backgroundButton.className).toBe('dark')

    userEvent.click(backgroundButton)

    expect(backgroundButton.className).toBe('light')
  })