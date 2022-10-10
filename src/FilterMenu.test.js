import { render, screen } from '@testing-library/react';
import App from './App';

test('that filter menu is rendered and contains options in correct order', () => {
    render(<App />)
    screen.getByTestId('filter-menu');
    expect(screen.getByTestId('filter-menu').options[0].text).toBe('All');
    expect(screen.getByTestId('filter-menu').options[1].text).toBe('Completed');
    expect(screen.getByTestId('filter-menu').options[2].text).toBe('Uncompleted');
  })