import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('caluculate correct result', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(await screen.findByTestId('calc-result')).toHaveTextContent('3');
});