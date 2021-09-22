import { render, screen } from 'solid-testing-library';
import { Button } from './Button';

const setup = () => {
  const clickFunction = jest.fn();

  return render(() => <Button onClick={clickFunction} />);
};

test('Example test', () => {
  setup();

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Improve coverage', () => {
  render(() => <Button onClick={() => {}}>Test</Button>);

  expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
});
