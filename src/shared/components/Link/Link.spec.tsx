import { Router } from 'solid-app-router';
import { render, screen } from 'solid-testing-library';
import { Link } from './Link';

const setup = (href: string, text?: string) => {
  render(() => (
    <Router>
      <Link href={href}>{text}</Link>
    </Router>
  ));
};

test('render link properly', () => {
  setup('/test');

  expect(screen.getByRole('link', { name: 'Link' })).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
});

test('set custom link content', () => {
  setup('/test', 'Super link');

  expect(screen.getByRole('link', { name: 'Super link' })).toBeInTheDocument();
});
