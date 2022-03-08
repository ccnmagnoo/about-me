import { NextComponentType } from 'next';
import React from 'react';
import st from '../../styles/Home.module.css';
import { Card } from './card';
import Lever from './lever';

const BigSwitch: NextComponentType = () => {
  return (
    <section className='bigSwitch'>
      <Lever>I&#39;m a Lever</Lever>
      <Card />
    </section>
  );
};

export default BigSwitch;
