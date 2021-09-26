import { render, screen } from 'solid-testing-library';
import { Button } from './Button';

test('Button should have default text haha', () => {
  render(() => <Button onClick={() => {}} />);

  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

test('Button text should be customizable', () => {
  render(() => <Button onClick={() => {}}>Test</Button>);

  expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
});
