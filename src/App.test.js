import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('caluculate correct result', () => {
  render(<App />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('3')).toBeInTheDocument();
});