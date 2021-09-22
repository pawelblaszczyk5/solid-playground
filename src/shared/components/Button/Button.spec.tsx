import { render, screen } from 'solid-testing-library';
import { Button } from './Button';

const setup = () => {
  const clickFunction = jest.fn();

  return render(() => <Button onClick={clickFunction} />);
};

test('hehehe', () => {
  setup();
  const x = screen.getByRole('button');
  console.log(x);
  expect(true).toEqual(true);
});
