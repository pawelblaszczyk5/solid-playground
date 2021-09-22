import type { Component } from 'solid-js';

import { Button } from '@shared/components/Button/Button';

const Home: Component = () => (
  <>
    <h1>Home</h1>
    <Button onClick={(e) => console.log(e)} />
  </>
);

export default Home;
