import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Toggle } from './components/Toggle';
import './App.css';

export const App = () => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  // const [isDark, setIsDark] = useState(false);

  return (
    <div
      className='App'
      data-theme={isDark ? 'dark' : 'light'}
    >
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Hello world!</h1>
      <div className='box'>
        <h2>This is a box</h2>
      </div>
    </div>
  );
};
