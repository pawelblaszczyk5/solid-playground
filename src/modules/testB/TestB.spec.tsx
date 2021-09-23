import { render, screen } from 'solid-testing-library';
import TestB from './TestB';

test('TestB route should render heading', () => {
  render(() => <TestB />);

  expect(
    screen.getByRole('heading', { name: 'Test B', level: 1 }),
  ).toBeInTheDocument();
});
