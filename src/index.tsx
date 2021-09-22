import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import { App } from './App';

import './index.css';
import 'modern-normalize';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')!,
);
